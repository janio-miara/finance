import styled, { css } from 'styled-components'
import { theme } from '../../styles/themes'

const changeBackground = {
    primary: css`
        background-color: ${theme.colors.blue40};
        :active {
            background-color: ${theme.colors.blue30};
        }
    `,
    secondary: css`
        background-color: ${theme.colors.blue40};
        :active {
            background-color: ${theme.colors.blue30};
        }
    `,
    error: css`
        background-color: ${theme.colors.red40};
        :active {
            background-color: ${theme.colors.red30};
        }
    `,
    default: css`
        background-color: ${theme.colors.shade30};
    `,
}

const changeBackgroundOutline = {
    primary: css`
        background-color: ${theme.colors.blue10};
        border: 1px solid ${theme.colors.blue40};
        color: ${theme.colors.blue40};
        :active {
            background-color: ${theme.colors.blue20};
        }
    `,
    secondary: css`
        background-color: ${theme.colors.blue10};
        border: 1px solid ${theme.colors.blue40};
        color: ${theme.colors.blue40};
        :active {
            background-color: ${theme.colors.blue20};
        }
    `,
    error: css`
        background-color: ${theme.colors.red10};
        border: 1px solid ${theme.colors.red40};
        color: ${theme.colors.red40};
        :active {
            background-color: ${theme.colors.red20};
        }
    `,
    default: css`
        border: 1px solid ${theme.colors.shade70};
        background-color: ${theme.colors.shade10};
        color: ${theme.colors.shade70};
    `,
}

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 20%;
    color: white;
    ${({ variant }) => changeBackground[variant || 'primary']};
    ${({ variant, outline }) =>
        outline && changeBackgroundOutline[variant || 'primary']};
    :hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.02);
    }
`
