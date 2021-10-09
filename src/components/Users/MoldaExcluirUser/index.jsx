import React from 'react'
import Modal from '../../Modal'
import { useUsers } from '../../../context/userContext'

const ModalExcluirUser = () => {
    const { deleteUser, modalDelete, selectUser, closeModalDelete } = useUsers()

    return (
        <Modal
            open={modalDelete}
            close={closeModalDelete}
            title="Deletar Usuario"
            textAction="Confirmar"
            actionClick={deleteUser}
        >
            Deseja excluir usuario <b>{selectUser?.name}</b> ?
        </Modal>
    )
}

export default ModalExcluirUser
