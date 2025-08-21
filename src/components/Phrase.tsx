import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRotate } from "react-icons/fa6";
import './stylesComponents/Home.css'
import Counter from "./Counter";


type PhraseProps = {
    id: number;
    phrase: string;
    author: string;
    onNextPhrase: () => void;
    onFavoritePhrase: () => void; // add to fav
    isFavorite: boolean; // nueva prop
};


const Phrase: React.FC<PhraseProps> = ({ phrase, author, onNextPhrase, onFavoritePhrase, isFavorite }: { phrase: string, author: string, onNextPhrase: () => void, onFavoritePhrase: () => void, isFavorite: boolean }) => {
    const [count, setCount] = useState(0);

    const handleNextPhrase = () => {
        onNextPhrase();            
        setCount(count + 1);       // incrementa el contador
    };
    return (
        <>
        <Counter count={count} />
            <div className="content-area">
                <section className='habit-quote'>
                    <p className='phrase'>{phrase}</p>
                    <p className='author'>{author}</p>
                    <div className="nav-buttons">
                        <button className="nav-button" onClick={handleNextPhrase}><FaRotate className='icon' /> Nueva Frase</button>
                        <button className="nav-button" onClick={onFavoritePhrase}>
                            <CiHeart className='icon' /> {isFavorite ? "Desmarcar" : "Añadir a favoritos"}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Phrase;