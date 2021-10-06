import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const FullScreen = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 0.5s fadeIn ease-in-out forwards;

    @keyframes fadeIn {
        from {
            background-color: rgba(0, 0, 0, 0);
        }
        to {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
`

export const Container = styled.div`
    display: flex;
    background-color: ${theme.colors.white};
    width: 400px;
    height: auto;
    border-radius: 0 0 ${theme.spacing.space1} ${theme.spacing.space1};
    flex-direction: column;

    .body {
        overflow: auto;
        padding: ${theme.spacing.space3};
        height: calc(100% - 60px);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${theme.colors.white};
        margin-top: -${theme.spacing.space1};
        border-radius: ${theme.spacing.space1} ${theme.spacing.space1} 0 0;
        padding: ${theme.spacing.space3};
        background-color: ${theme.colors.blue40};
        height: ${theme.spacing.space4};

        .close {
            border: none;
            background: none;
            cursor: pointer;
            :hover {
                font-weight: bold;
                color: ${theme.colors.white};
            }
        }
    }

    footer {
        padding: ${theme.spacing.space3};
        width: 100%;
        height: 60px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-end;
        button {
            margin-left: ${theme.spacing.space1};
        }
    }
`
