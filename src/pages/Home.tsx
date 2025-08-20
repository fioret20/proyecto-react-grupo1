import { useState, useEffect } from 'react';
import Phrase from '../components/Phrase';
import PhraseJSON from "../../public/phrase.json";   
import FavoriteList from '../components/FavoriteList';
import type { Phrase as PhraseType } from "../types/Phrase";


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [phrases, setPhrases] = useState<any[]>([]);

    // Cargar frases al iniciar
    useEffect(() => {
        setLoading(true);
        fetch('/phrase.json')
            .then(res => res.json())
            .then(data => {
                setPhrases(data);
                setLoading(false);
            });
    }, []);

    const handleNextPhrase = () => {
        setLoading(true);
        // Simula consulta, pero aquí solo cambia el índice
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setLoading(false);
        }, 800); // Simula el tiempo de consulta
    };

    const currentPhrase = PhraseJSON[currentIndex];

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
            <div className="home">
                <h1>Welcome to the Home Page</h1>
                <p>This is the main content of the home page.</p>
            </div>

            
            {loading || !currentPhrase ? (
                <div className="loading-container">
                    <p>Cargando...</p>
                </div>
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