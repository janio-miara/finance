import styled from 'styled-components'
import { theme } from '../../../styles/themes'

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

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
`
