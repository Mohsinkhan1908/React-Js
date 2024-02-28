import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/login'

function App() {

  return (
    <>
      <UserContextProvider>
          <Login/>
      </UserContextProvider>
    </>
  )
}

export default App
