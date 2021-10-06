import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.span`
    position: relative;
    width: 100%;
    height: 100%;
    svg {
        position: relative;
        top: 30px;
        left: 14px;
    }
`

export const ContainerInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1.5px solid ${theme.colors.shade40};
    border-radius: ${theme.spacing.space1};
    padding: ${theme.spacing.space2};
    font-size: ${theme.fontSizes.p2};
    padding-left: ${({ icon }) => icon && theme.spacing.space5};
    color: ${theme.colors.shade80};

    &:focus {
        font-weight: bold;
        border: 1.5px solid ${theme.colors.blue40};
    }
`
