import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.div`
    position: absolute;
    background-color: ${theme.colors.blue40};
    justify-content: center;
    padding: ${theme.spacing.space3};
    display: flex;
    height: 100%;
    width: 200px;
`
