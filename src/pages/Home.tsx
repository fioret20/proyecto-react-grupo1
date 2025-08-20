import { useState, useEffect } from 'react';
import Phrase from '../components/Phrase';
import PhraseJSON from "../../public/phrase.json";
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
            <Title />

            <Categories currentCategory={'Todas'} onCategoryChange={function (category: string): void {
            }} />

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