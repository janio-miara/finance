import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.div`
    margin: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
    height: 50px;

    .description {
        display: flex;
        align-items: center;

        svg {
            cursor: pointer;
        }

        p {
            margin-left: 8px;
        }
    }

    .done {
        display: flex;
        align-items: center;
        color: ${theme.colors.shade50};
    }

    .action {
        display: flex;
        align-items: center;

        button {
            margin-left: 8px;
        }
    }

    :hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
        background-color: ${theme.colors.shade30};
    }
`
