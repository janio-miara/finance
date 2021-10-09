import React, { useState } from 'react'
import Modal from '../../Modal'
import { useTask } from '../../../context/taskContext'
import Input from '../../input'
import { BiTask } from 'react-icons/bi'

const ModalCreateTask = ({ id }) => {
    const [value, setValue] = useState('')
    const { open, closeModalTask, createTask } = useTask()

    const submit = () => {
        createTask(Number(id), value)
        setValue('')
    }

    return (
        <Modal
            open={open}
            close={closeModalTask}
            title="Adicionar tarefa"
            textAction="Cadastrar"
            actionClick={() => submit()}
        >
            <Input
                icon={<BiTask />}
                type={'textarea'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Modal>
    )
}

export default ModalCreateTask
