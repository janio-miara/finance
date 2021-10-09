import React, { createContext, useState, useContext } from 'react'
import api from '../services/api'

const UsersContext = createContext(null)

const UsersProvider = ({ children }) => {
    const [modalDelete, setModalDelete] = useState(false)
    const [modalCreate, setModalCreate] = useState(false)
    const [isFetch, seIsFetch] = useState(false)
    const [users, setUser] = useState([])
    const [selectUser, setSelectUser] = useState(null)

    const openModalCreateUser = () => {
        setModalCreate(true)
    }

    const closeModalCreateUser = () => {
        setModalCreate(false)
    }

    const openModalDelete = (user) => {
        setSelectUser(user)
        setModalDelete(true)
    }
    const closeModalDelete = () => {
        setModalDelete(false)
    }

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

    const deleteUser = async () => {
        seIsFetch(true)
        try {
            await api.delete(`/users/${selectUser.id}`)
            await getUsers()
            closeModalDelete()
        } catch {
            console.log('deu errado')
        } finally {
            seIsFetch(false)
        }
    }

    const createUser = async (name) => {
        seIsFetch(true)
        try {
            await api.post('/users', {
                name,
            })
            await getUsers()
            closeModalCreateUser()
        } catch {
            console.log('deu errado')
        } finally {
            seIsFetch(false)
        }
    }

    return (
        <UsersContext.Provider
            value={{
                selectUser,
                modalDelete,
                isFetch,
                users,
                setUser,
                modalCreate,
                deleteUser,
                openModalDelete,
                getUsers,
                closeModalDelete,
                createUser,
                openModalCreateUser,
                closeModalCreateUser,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}

const useUsers = () => {
    return useContext(UsersContext)
}

export { UsersProvider, useUsers }
