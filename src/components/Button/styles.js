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
    border: none;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.space2} ${theme.spacing.space3};
    border-radius: ${theme.spacing.space1};
    color: white;
    font-weight: bold;
    font-size: ${theme.fontSizes.p3};
    ${({ variant, disabled }) =>
        disabled
            ? changeBackground.default
            : changeBackground[variant || 'primary']};
    ${({ variant, outline }) =>
        outline && changeBackgroundOutline[variant || 'primary']};

    :hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.02);
    }

    svg {
        animation: rotate-in-center 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            infinite both;
        margin-right: ${theme.spacing.space1};
    }

    @keyframes rotate-in-center {
        0% {
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
            opacity: 1;
        }
    }
`
