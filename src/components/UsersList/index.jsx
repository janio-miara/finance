import React, { useState } from 'react'
import { dataUser } from '../../data/usersData'
import { Container, Wrapper } from './styles'
import Avatar from '../Avatar'
import { FaTasks, FaTrash } from 'react-icons/fa'
import ButonRadius from '../ButtonRadius'
import ModalExcluirUser from './MoldaExcluirUser'

const ListUsers = () => {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState('')

    const deleteUser = (name) => {
        setOpen(true)
        setUser(name)
    }

    return (
        <>
            <Container>
                {dataUser.map((user) => (
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
                                onClick={() => deleteUser(user)}
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
