import { useState, useEffect } from 'react';
import Phrase from '../components/Phrase';
import PhraseJSON from "../../public/phrase.json";   
import FavoriteList from '../components/FavoriteList';
import type { Phrase as PhraseType } from "../types/Phrase";
import LoadingPhrase from '../components/LoadingPhrase';
import Title from '../components/Title';
import Categories from '../components/Categories';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [phrases, setPhrases] = useState<any[]>([]);

    useEffect(() => {
        setLoading(true);
        fetch('/phrase.json')
            .then(res => res.json())
            .then(data => {
                setPhrases(data);
                setLoading(false);
            });
    }, []);

    const [currentCategory, setCurrentCategory] = useState<string>('Todas');

    const quotes = PhraseJSON;

    const filteredQuotes = currentCategory === 'Todas'
        ? quotes
        : quotes.filter((quote: { category: string }) => quote.category === currentCategory);

    const handleCategoryChange = (category: string) => {
        setCurrentCategory(category);
    };

    const handleNextPhrase = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredQuotes.length);
            setLoading(false);
        }, 500); // Simula el tiempo de consulta
    };

    const currentPhrase = filteredQuotes[currentIndex];


    // Estado de favoritos
    const [favorites, setFavorites] = useState<PhraseType[]>(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (phrase: PhraseType) => {
        if (favorites.find(f => f.id === phrase.id)) {
            setFavorites(prev => prev.filter(f => f.id !== phrase.id));
        } else {
            setFavorites(prev => [...prev, phrase]);
        }
    };
      
    return (
        <>
            <Title />
            <Categories
                currentCategory={currentCategory}
                onCategoryChange={handleCategoryChange}
            />


            
            {loading || !currentPhrase ? (
                <LoadingPhrase />
            ) : (
                <Phrase
                    phrase={currentPhrase.text}
                    author={currentPhrase.author}
                    id={currentPhrase.id}
                    onNextPhrase={handleNextPhrase}

                    onFavoritePhrase={() => toggleFavorite(currentPhrase)} // agregamos favoritos
                /> 

            )} 
            <FavoriteList favorites={favorites} marcFavorite={toggleFavorite} />


        </>
    );
}
export default Home;