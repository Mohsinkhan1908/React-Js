import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  function Add(){
    if(counter <20){
    console.log(counter)
    return setCounter(counter+1);
  }
  }
  function Remove(){
    console.log(counter)
    return setCounter(counter-1);
  }
  return (
    <>
    <h1>Counter {counter}</h1>
    <div>Counter value : {counter}</div>
    <br/>
    <button onClick={Add}>Increase</button>
    <button onClick={Remove}>Decrease</button>
    </>
  )
}

export default App
