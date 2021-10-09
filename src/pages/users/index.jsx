import React, { useEffect } from 'react'
import { Container, Wrapper } from './styles'
import Button from '../../components/Button'
import ListUsers from '../../components/Users/UsersList'
import { useUsers } from '../../context/userContext'
import ModalExcluirUser from '../../components/Users/MoldaExcluirUser'
import ModalCreateUser from '../../components/Users/ModalCreateUser'

const Users = () => {
    const { getUsers, openModalCreateUser } = useUsers()

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Container>
            <Button className={'button'} onClick={openModalCreateUser}>
                Cadastar Usuario
            </Button>
            <Wrapper>
                <ListUsers />
            </Wrapper>
            <ModalExcluirUser />
            <ModalCreateUser />
        </Container>
    )
}

export default Users
