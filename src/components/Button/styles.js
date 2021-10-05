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

export const Container = styled.button`
    display: flex;
    border: none;
    padding: ${theme.spacing.space2} ${theme.spacing.space3};
    border-radius: ${theme.spacing.space2};
    color: white;
    font-weight: bold;
    font-size: ${theme.fontSizes.p1};
    ${({ variant, disabled }) =>
        disabled
            ? changeBackground.default
            : changeBackground[variant || 'primary']}

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
