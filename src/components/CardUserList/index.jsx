import React from 'react'
import { Container } from './styles'
import Avatar from '../Avatar'
import ButonRadius from '../ButtonRadius'
import { FaTasks, FaTrash } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const Card = ({ user }) => {
    const history = useHistory()

    return (
        <Container>
            <div className={'title'}>
                <Avatar name={user.name} size={'small'} />
                <p className="name"> {user.name}</p>
            </div>
            <div className={'action'}>
                <ButonRadius
                    icon={<FaTasks />}
                    onClick={() => history.push(`tasks/${user.id}`)}
                />
                <ButonRadius
                    icon={<FaTrash />}
                    variant={'error'}
                    outline
                    onClick={() => console(user)}
                />
            </div>
        </Container>
    )
}

export default Card
