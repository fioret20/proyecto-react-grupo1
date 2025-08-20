import './stylesComponents/Phrase.css';
import { CiHeart } from "react-icons/ci";
import { FaRotate } from "react-icons/fa6";


type PhraseProps = {
    id: number;
    phrase: string;
    author: string;
    onNextPhrase: () => void;
    onFavoritePhrase: () => void; // add to fav
};


const Phrase: React.FC<PhraseProps> = ({ phrase, author, onNextPhrase , onFavoritePhrase }: { phrase: string, author: string, onNextPhrase: () => void , onFavoritePhrase: () => void }) => {
    return (
        <>
            <div className="phrase-container">
                <p className='phrase'>{phrase}</p>
                <p className='author'>{author}</p>
                <div className="phrase-controls">
                    <button className="button-phrase"  onClick={onNextPhrase}><FaRotate className='icon' /> Nueva Frase</button>
                    <button className="button-phrase" onClick={onFavoritePhrase}><CiHeart  className='icon'/> Añadir a favoritos</button>
                </div>  
            </div>
        </>
    );
}

export default Phrase;