
const LoadingPhrase = () =>{
    return (
        <>  
            <div className="phrase-container">
                <p className='phrase'></p>
                <p className='author'></p>
                <div className="phrase-controls">
                    <button className="button-phrase"  onClick={onNextPhrase}><FaRotate className='icon' /> Nueva Frase</button>
                    <button className="button-phrase"><CiHeart  className='icon'/> Añadir a favoritos</button>
                </div>  
            </div>
        </>
    );
}

export default LoadingPhrase;