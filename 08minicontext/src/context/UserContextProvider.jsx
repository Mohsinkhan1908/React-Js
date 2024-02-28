import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({chilren}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user , setUser}} >
            {chilren}
        </UserContext.Provider>

    )
}

export default UserContextProvider
