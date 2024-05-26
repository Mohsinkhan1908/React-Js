import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>This is a React project</h1>
  )
}

const AnotherElement = ()=>{
  return (
    <a href="www.google.com" target='_blank'>Visit Google</a>
  )
}

// creating Element with help of React.create(type , props , children(innerHTML) ,variables)
const ReactElement = React.createElement(
  'a',
  {href:'www.google.com' , target : '_blank'},
  'Click me '
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  {/* //ReactElement */}
   <AnotherElement />
    <MyApp/>
    //MyApp() - works same but not suggested ,bad habit
    </>
    
    

)
