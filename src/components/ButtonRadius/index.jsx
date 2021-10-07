import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const ButonRadius = ({ icon, ...props }) => {
    return <Container {...props}>{icon}</Container>
}

ButonRadius.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.any,
    variant: PropTypes.object,
    icon: PropTypes.node.isRequired,
    outline: PropTypes.bool,
}

export default ButonRadius
