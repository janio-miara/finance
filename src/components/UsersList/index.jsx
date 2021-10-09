import React, { useState } from 'react'
import { Container } from './styles'

import ModalExcluirUser from './MoldaExcluirUser'
import { useUsers } from '../../context/userContext'
import { useHistory } from 'react-router-dom'
import Card from '../CardUserList'

const ListUsers = () => {
    const { users, isFetch } = useUsers()
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState('')

    return (
        <>
            <Container>
                {!isFetch && users?.map((user) => <Card user={user} />)}
            </Container>

            <ModalExcluirUser
                open={open}
                close={() => setOpen(false)}
                user={user}
            />
        </>
    )
}

export default ListUsers
