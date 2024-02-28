import React, {useContext} from 'react'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPasswor] = useState('')
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username} 
            placeholder='username'
            onChange={(e)=> setUsername(e.target.value)}
            />
            <input type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'/>
        </div>
        
    )
}

export default Login
