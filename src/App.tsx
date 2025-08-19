import { useState } from 'react'
import './App.css'
import QuoteDisplay from './components/Quote'
import Categories from './components/Categories'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
