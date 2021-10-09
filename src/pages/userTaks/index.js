import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardTaskList from '../../components/Tasks/CardTaskList'
import Button from '../../components/Button'
import { useTask } from '../../context/taskContext'
import ModalCreateTask from '../../components/Tasks/ModalCreateTask'
import { Container } from './styles'
import { BiArrowBack } from 'react-icons/bi'
import ButonRadius from '../../components/ButtonRadius'
import { Link } from 'react-router-dom'

const UserTask = () => {
    let { id } = useParams()
    const { tasks, getTasks, openModalTask } = useTask()

    useEffect(() => {
        getTasks(id)
    }, [id])

    return (
        <Container>
            <Link to={'/'} className={'back'}>
                <ButonRadius icon={<BiArrowBack />} outline />
                <p>Lista de Usuarios</p>
            </Link>
            <Button onClick={() => openModalTask()}>Cadastrar Tarefa</Button>
            <div>
                {tasks?.map((el) => {
                    return <CardTaskList task={el} />
                })}
            </div>
            <ModalCreateTask id={id} />
        </Container>
    )
}

export default UserTask
