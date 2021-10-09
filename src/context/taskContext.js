import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

const TaskContext = createContext(null)

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [open, setOpenModal] = useState(false)

    const closeModalTask = () => {
        setOpenModal(false)
    }

    const openModalTask = () => {
        setOpenModal(true)
    }

    const createTask = async (userId, description) => {
        try {
            await api.post('/tasks', {
                userId,
                description,
                done: false,
            })
            await getTasks(userId)
            closeModalTask()
        } catch {
            console.log('deu errado')
        } finally {
        }
    }

    const getTasks = async (id) => {
        try {
            const { data } = await api.get(`/tasks/${id}`)
            setTasks(data)
        } catch {
            console.log('deu errado')
        } finally {
        }
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                open,
                getTasks,
                closeModalTask,
                openModalTask,
                createTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

const useTask = () => {
    return useContext(TaskContext)
}

export { TaskProvider, useTask }
