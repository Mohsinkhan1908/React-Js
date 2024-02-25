import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor: color}}>
      <div className="fixed bg-gray-600 flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <button 
      onClick={ ()=>setColor("red") }
      className='bg-slate-500 border-2 border-yellow p-2 px-4 rounded-xl m-2'>
        Red
      </button>
      <button 
      onClick={ ()=>setColor("Green") }
      className='bg-slate-500 border-2 border-yellow p-2 px-4 rounded-xl m-2'>
        Green
      </button>
      <button 
      onClick={ ()=>setColor("Blue") }
      className='bg-slate-500 border-2 border-yellow p-2 px-4 rounded-xl m-2'>
        Blue
      </button>



      </div>
      </div>
    </>
  )
}

export default App
