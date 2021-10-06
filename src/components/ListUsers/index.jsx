import React from 'react'
import { dataUser } from '../../data/usersData'
import { Container, Wrapper } from './styles'
import Avatar from '../Avatar'
import { FaTasks, FaTrash } from 'react-icons/fa'

const ListUsers = () => {
    return (
        <Container>
            {dataUser.map((user) => (
                <Wrapper>
                    <div className={'title'}>
                        <Avatar name={user.name} size={'small'} />
                        <p className="name"> {user.name}</p>
                    </div>
                    <div className={'action'}>
                        <FaTasks />
                        <FaTrash />
                    </div>
                </Wrapper>
            ))}
        </Container>
    )
}

export default ListUsers
