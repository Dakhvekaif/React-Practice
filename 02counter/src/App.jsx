import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    //Assignment was to make this count not exceed value above 20
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    //Assignment was to make this count not go below 0
    if (counter != 0) {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
