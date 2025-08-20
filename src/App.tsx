import './stylesPages/Home.css'
import QuoteDisplay from './components/Quote'
import Categories from './components/Categories'

function App() {

  return (
    <>
      <Categories currentCategory={''} onCategoryChange={function (category: string): void {
        throw new Error('Function not implemented.')
      }}></Categories>

      <QuoteDisplay quote={''} author={''} onAddToFavorites={function (): void {
        throw new Error('Function not implemented.')
      }} onNewQuote={function (): void {
        throw new Error('Function not implemented.')
      }}>

      </QuoteDisplay>
    </>
  )
}

export default App
