import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.shade10};
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
`
