import './stylesComponents/Phrase.css';


const Phrase = ({ phrase, author }: { phrase: string, author: string }) => {
    return (
        <div className="phrase">
            <div className="phrase-controls">
                <button>Nueva Frase</button>
                <button>Añadir a favoritos</button>
            </div>
            <p>{phrase}</p>
            <p>{author}</p>
        </div>
    );
}

export default Phrase;