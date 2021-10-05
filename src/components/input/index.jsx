import React from 'react'
import * as Style from './styles'

import PropTypes from 'prop-types'

const Input = ({ icon, ...props }) => {
    return (
        <Style.Container>
            {icon}
            <Style.ContainerInput {...props} icon={icon} />
        </Style.Container>
    )
}

Input.propTypes = {
    icon: PropTypes.node.isRequired,
    props: PropTypes.any,
}

export default Input
