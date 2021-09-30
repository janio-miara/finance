import React from 'react'
import PropTypes from 'prop-types'
import { Container, Wrapper } from './styles';


const Avatar = ({ name, size }) => {
    const handleName = () => {
        const newName = name.split(' ')
        if (newName.length > 1) {
            return newName[0].substr(0, 1) + newName[1].substr(0, 1)
        }
        return newName[0].substr(0, 2)
    }

    return (
        <Container>
            <Wrapper size={size}>{handleName()}</Wrapper>
        </Container>
    )
}

Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
}

export default Avatar
