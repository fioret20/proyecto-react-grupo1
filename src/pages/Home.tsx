import { useState, useEffect } from 'react';
import Phrase from '../components/Phrase';
import PhraseJSON from "../../public/phrase.json"; 
import LoadingPhrase from '../components/LoadingPhrase';  


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

    const handleNextPhrase = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setLoading(false);
        }, 500); // Simula el tiempo de consulta
    };

    const currentPhrase = PhraseJSON[currentIndex];

    return (
        <>
            <div className="home">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content of the home page.</p>
            </div>

            {loading || !currentPhrase ? (
                <LoadingPhrase />
            ) : (
                <Phrase 
                    phrase={currentPhrase.text} 
                    author={currentPhrase.author} 
                    id={currentPhrase.id}
                    onNextPhrase={handleNextPhrase}
                /> 
            )}
        </>
    );
    }
export default Home;