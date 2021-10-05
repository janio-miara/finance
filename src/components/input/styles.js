import styled from 'styled-components'
import { theme } from '../../styles/themes'

export const Container = styled.span`
    svg {
        position: relative;
        top: 3px;
        left: 24px;
    }
`

export const ContainerInput = styled.input`
    border: 1.5px solid ${theme.colors.shade40};
    border-radius: ${theme.spacing.space1};
    padding: ${theme.spacing.space2};
    padding-left: ${({ icon }) => icon && theme.spacing.space5};
    color: ${theme.colors.shade70};

    &:focus {
        border: 1.5px solid ${theme.colors.shade50};
    }
`
