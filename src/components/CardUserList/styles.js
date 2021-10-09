import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.div`
    margin: 8px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
    height: 50px;
    .title {
        display: flex;
        align-items: center;
    }
    .name {
        color: ${theme.colors.shade70};
        margin-left: 16px;
        font-size: 16px;
        font-weight: bold;
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
