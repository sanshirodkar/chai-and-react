import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  //let counter = 5
  const addValue = () => {
    console.log("Value added", Math.random());
    setCounter(counter + 1);
  }

  const removeVal = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h2>Chai and React</h2>
      <h4>Counter value: {counter}</h4>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeVal}>Remove</button>
    </>
  )
}

export default App
