import './stylesComponents/Phrase.css';
import { CiHeart } from "react-icons/ci";
import { FaRotate } from "react-icons/fa6";


const Phrase = ({ phrase, author }: { phrase: string, author: string }) => {
    return (
        <>  
            <div className="phrase-container">
                <p className='phrase'>{phrase}</p>
                <p>{author}</p>
                <div className="phrase-controls">
                    <button className="button-phrase"><FaRotate /> Nueva Frase</button>
                    <button className="button-phrase"><CiHeart /> Añadir a favoritos</button>
                </div>  
            </div>
        </>
    );
}

export default Phrase;