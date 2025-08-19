import React from 'react';

interface QuoteDisplayProps {
    quote: string;
    author: string;
    onAddToFavorites: () => void;
    onNewQuote: () => void;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote, author, onAddToFavorites, onNewQuote }) => {
    return (
        <div>
            <p>"aca la frase{quote}"</p>
            <p>aca el autor{author}</p>
            <div>
                <button onClick={onAddToFavorites}>
                    Add to Favorites
                </button>
                <button onClick={onNewQuote}>
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteDisplay;
