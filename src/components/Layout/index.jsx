import React from 'react'
import * as Style from './styles'
import Nav from '../Nav'

const Layout = ({ children }) => {
    return (
        <Style.Container>
            <Nav />
            <div className={'wrapper'}>{children}</div>
        </Style.Container>
    )
}

export default Layout
