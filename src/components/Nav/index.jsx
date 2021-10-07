import React from 'react'
import * as Style from './styles'
import Button from '../Button'
import { useHistory } from 'react-router-dom'

const Nav = () => {
    const history = useHistory()
    return (
        <Style.Container>
            <Button onClick={() => history.push('/')}>
                Listas dos Usuarios
            </Button>
            <Button>Cadastrar Usuario</Button>
        </Style.Container>
    )
}

export default Nav
