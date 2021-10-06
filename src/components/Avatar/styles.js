import styled, { css } from 'styled-components'
import { theme } from '../../styles/themes'

const changeSize = {
    small: css`
        height: 30px;
        width: 30px;
        font-size: ${theme.fontSizes.p4};
    `,
    medium: css`
        height: 60px;
        width: 60px;
    `,
    large: css`
        height: 90px;
        width: 90px;
        font-size: ${theme.fontSizes.p0};
    `,
}

export const Container = styled.div`
    width: auto;
`

export const Wrapper = styled.div`
    background-color: ${theme.colors.blue30};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: 600;
    ${({ size }) => changeSize[size || 'medium']};
    text-transform: uppercase;

    :hover {
        background-color: ${theme.colors.mint40};
    }
`
