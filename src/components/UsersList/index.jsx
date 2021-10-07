import React, { useState } from 'react'
import { Container, Wrapper } from './styles'
import Avatar from '../Avatar'
import { FaTasks, FaTrash } from 'react-icons/fa'
import ButonRadius from '../ButtonRadius'
import ModalExcluirUser from './MoldaExcluirUser'
import { useUsers } from '../../context/userContext'

const ListUsers = () => {
    const { users } = useUsers()
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState('')

    const openModalExcluirUser = (name) => {
        setOpen(true)
        setUser(name)
    }

    return (
        <>
            <Container>
                {users?.map((user) => (
                    <Wrapper>
                        <div className={'title'}>
                            <Avatar name={user.name} size={'small'} />
                            <p className="name"> {user.name}</p>
                        </div>
                        <div className={'action'}>
                            <ButonRadius icon={<FaTasks />} />
                            <ButonRadius
                                icon={<FaTrash />}
                                variant={'error'}
                                outline
                                onClick={() => openModalExcluirUser(user)}
                            />
                        </div>
                    </Wrapper>
                ))}
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
