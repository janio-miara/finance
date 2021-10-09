import React from 'react'
import { Container } from './styles'
import { useUsers } from '../../../context/userContext'
import CardUser from '../CardUserList'

const ListUsers = () => {
    const { users } = useUsers()
    return (
        <Container>
            {users?.map((user) => (
                <CardUser user={user} />
            ))}
        </Container>
    )
}

export default ListUsers
