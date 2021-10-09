import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 24px;
    background-color: ${theme.colors.shade10};
`
