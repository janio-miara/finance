import React from 'react'
import PropTypes from 'prop-types'
import * as Style from './styles'
import { BiLoaderCircle } from 'react-icons/bi'

const Button = ({ loading, children, ...props }) => {
    return (
        <Style.Container {...props} disabled={loading}>
            {loading && <BiLoaderCircle />}
            {children}
        </Style.Container>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.any,
    loading: PropTypes.bool,
    variant: PropTypes.object,
    outline: PropTypes.bool,
}

export default Button
