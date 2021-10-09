import React, { useState } from 'react'
import Modal from '../../Modal'
import { useUsers } from '../../../context/userContext'
import Input from '../../input'
import { FaUserAlt } from 'react-icons/fa'

const ModalCreateUser = () => {
    const { modalCreate, closeModalCreateUser, createUser } = useUsers()
    const [value, setValue] = useState('')

    const submit = () => {
        createUser(value)
        setValue('')
    }

    return (
        <Modal
            open={modalCreate}
            close={closeModalCreateUser}
            title="Cadastrar Usuario"
            textAction="Adicionar"
            actionClick={submit}
        >
            <Input
                icon={<FaUserAlt />}
                type={'textarea'}
                value={value}
                placeholder={'Digite o nome do usuario...'}
                onChange={(e) => setValue(e.target.value)}
            />
        </Modal>
    )
}

export default ModalCreateUser
