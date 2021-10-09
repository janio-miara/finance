import React, { createContext, useState, useContext, useEffect } from 'react'
import api from '../services/api'

const UsersContext = createContext(null)

const UsersProvider = ({ children }) => {
    const [isFetch, seIsFetch] = useState(false)
    const [users, setUser] = useState([])

    const getUsers = async () => {
        seIsFetch(true)
        try {
            const { data } = await api.get('/users')
            setUser(data)
        } catch {
            console.log('deu errado')
        } finally {
            seIsFetch(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteUser = (id) => {
        setUser(users.filter((user) => user.id !== id))
    }

    const createUser = () => {}

    return (
        <UsersContext.Provider value={{ isFetch, users, setUser, deleteUser }}>
            {children}
        </UsersContext.Provider>
    )
}

const useUsers = () => {
    return useContext(UsersContext)
}

export { UsersProvider, useUsers }
