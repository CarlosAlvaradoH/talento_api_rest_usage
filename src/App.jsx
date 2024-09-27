import { useState } from 'react'
import './App.css'
import { ApiCoffeCarousel } from './components/ApiCoffeCarousel' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ApiCoffeCarousel/>
      </div>
    </>
  )
}

export default App
