import { useState, type QuoteHTMLAttributes } from 'react'
import './App.css'
import QuoteDisplay from './components/Quote'
import Categories from './components/Categories'
import Title from './components/Title'
import Phrases from '../public/phrase.json';


type PhraseProps = {
  id: number;
  phrase: string;
  author: string;
  category: string;
  onNextPhrase: () => void;
};

function App() {

  const [currentCategory, setCurrentCategory] = useState<string>('Todas');

  const quotes = Phrases;

  const filteredQuotes = currentCategory === 'Todas'
    ? quotes
    : quotes.filter((quote: { category: string }) => quote.category === currentCategory);

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

  return (
    <>
      <Title></Title>

      <Categories currentCategory={''} onCategoryChange={function (category: string): void {
        throw new Error('Function not implemented.')
      }}></Categories>

      <QuoteDisplay quote={''} author={''} onAddToFavorites={function (): void {
        throw new Error('Function not implemented.')
      }} onNewQuote={function (): void {
        throw new Error('Function not implemented.')
      }}>

      </QuoteDisplay>

      <div>
        {filteredQuotes.length > 0 && (
          <div>
            <blockquote>
              <p>{filteredQuotes[randomIndex].text}</p>
              <footer>— {filteredQuotes[randomIndex].author}</footer>
            </blockquote>
            {/* los botones */}
          </div>
        )}
      </div>


    </>
  )
}

export default App
