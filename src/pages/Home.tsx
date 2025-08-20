import { useState, useEffect } from 'react';
import Phrase from '../components/Phrase';
import type { Phrase as PhraseType } from "../types/Phrase";
import FavoriteList from '../components/FavoriteList';

const objects = [
    {
        id: 1,
        phrase: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        id: 2,
        phrase: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    }
];


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    //frase
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

    const handleNextPhrase = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % objects.length);
    };

    const currentPhrase = objects[currentIndex];

    return (
        <>
            <div className="home">
                <h1>Welcome to the Home Page</h1>
                <p>This is the main content of the home page.</p>
            </div>

            <Phrase
                phrase={currentPhrase.phrase}
                author={currentPhrase.author}
                id={currentPhrase.id}
                onNextPhrase={handleNextPhrase}
                onFavoritePhrase={() => toggleFavorite(currentPhrase)}  // se pasa desde App

            />
            <FavoriteList favorites={favorites} marcFavorite={toggleFavorite} />

        </>
    );
}
export default Home;