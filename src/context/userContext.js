import React, { createContext, useState, useContext } from 'react'
import { dataUser } from '../data/usersData'

const UsersContext = createContext(null)

const UsersProvider = ({ children }) => {
    const [users, setUser] = useState(dataUser)

    const deleteUser = (id) => {
        setUser(users.filter((user) => user.id !== id))
    }

    const createUser = () => {}

    return (
        <UsersContext.Provider value={{ users, setUser, deleteUser }}>
            {children}
        </UsersContext.Provider>
    )
}

const useUsers = () => {
    return useContext(UsersContext)
}

export { UsersProvider, useUsers }
