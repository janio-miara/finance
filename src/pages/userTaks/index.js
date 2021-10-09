import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardTaskList from '../../components/CardTaskList'
import Button from '../../components/Button'
import { useTask } from '../../context/taskContext'
import ModalCreateTask from '../../components/Tasks/ModalCreateTask'

const UserTask = () => {
    let { id } = useParams()
    const { tasks, getTasks, openModalTask } = useTask()

    useEffect(() => {
        getTasks(id)
    }, [id])

    return (
        <div style={{ width: '600px' }}>
            <Button onClick={() => openModalTask()}>Cadastrar Tarefa</Button>
            <div>
                {tasks?.map((el) => {
                    return <CardTaskList task={el} />
                })}
            </div>
            <ModalCreateTask id={id} />
        </div>
    )
}

export default UserTask
