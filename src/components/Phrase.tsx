import './stylesComponents/Phrase.css';
import { CiHeart } from "react-icons/ci";
import { FaRotate } from "react-icons/fa6";


type PhraseProps = {
    id: number;
    phrase: string;
    author: string;
    onNextPhrase: () => void;
};


const Phrase: React.FC<PhraseProps> = ({ phrase, author, onNextPhrase }: { phrase: string, author: string, onNextPhrase: () => void }) => {
    return (
        <>
            <div className="phrase-container">
                <p className='phrase'>{phrase}</p>
                <p className='author'>{author}</p>
                <div className="phrase-controls">
                    <button className="button-phrase" onClick={onNextPhrase}><FaRotate className='icon' /> Nueva Frase</button>
                    <button className="button-phrase"><CiHeart className='icon' /> Añadir a favoritos</button>
                </div>
            </div>
        </>
    );
}

export default Phrase;