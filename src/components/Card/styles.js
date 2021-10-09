import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.div`
    margin: ${theme.spacing.space2};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.space2};
    border-radius: ${theme.spacing.space1};
    background-color: ${theme.colors.white};
    height: 50px;

    :hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
        background-color: ${theme.colors.shade30};
    }
`
