import { useState, useEffect } from 'react';
import Phrase from '../components/Phrase';

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

    const handleNextPhrase = () => {
        setLoading(true);
        // Simula consulta, pero aquí solo cambia el índice
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setLoading(false);
        }, 800); // Simula el tiempo de consulta
    };

    const currentPhrase = PhraseJSON[currentIndex];

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
                /> 
        </>
    );
}
export default Home;