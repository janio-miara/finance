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
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 0 0 8px 8px;
  flex-direction: column;

  .body {
    overflow: auto;
    padding: ${theme.spacing.space3};
    height: calc(100% - 60px);
  }

  header {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: ${theme.spacing.space3};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.blue40};
    height: ${theme.spacing.space6};

    .close {
      span {
        border: none;
        opacity: 0.6;
        :hover {
          opacity: 1;
        }
      }
    }

    .logo {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 1rem;
      color: #fff;
      font-size: ${theme.fontSizes.small};
    }

    svg {
      color: #fff;
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
  }
`
