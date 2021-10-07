import React from 'react'
import Modal from '../../Modal'

const ModalExcluirUser = ({ open, close, user }) => {
    return (
        <Modal
            open={open}
            close={close}
            title="Deletar Usuario"
            textAction="Confirmar"
        >
            Deseja excluir usuario <b>{user.name}</b>?
        </Modal>
    )
}

export default ModalExcluirUser
