import React from 'react'
import Modal from '../../Modal'
import { useUsers } from '../../../context/userContext'

const ModalExcluirUser = ({ open, close, user }) => {
    const { deleteUser } = useUsers()

    const handleDeleteUser = () => {
        deleteUser(user.id)
        close()
    }

    return (
        <Modal
            open={open}
            close={close}
            title="Deletar Usuario"
            textAction="Confirmar"
            actionClick={handleDeleteUser}
        >
            Deseja excluir usuario <b>{user.name}</b>?
        </Modal>
    )
}

export default ModalExcluirUser
