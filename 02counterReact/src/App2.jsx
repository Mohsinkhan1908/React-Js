import React, { useState } from 'react'

function App2() {
    const [count,setCount] = useState(0);
    function add() {
        console.log(count);
        return setCount(count+1)
    }
    function sub() {
        console.log(count);
        return setCount(count-1)
        
    }
    return (
        <>
        <h1>Counter {count} </h1>
        <button onClick={add}>Increase</button>
        <button onClick={sub}>Decrease</button>
        </>
    )
}

export default App2;
