// Libraries
import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  border: 2px solid;
  padding: 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.secondaryColor0};
  border-color: ${({ theme }) => theme.secondaryColor0};
  text-align: center;

  :hover {
    color: ${({ theme }) => theme.fontColorHover};
    background-color: ${({ theme }) => theme.secondaryColor1};
    border-color: ${({ theme }) => theme.secondaryColor1};
  }

  :active {
    color: ${({ theme }) => theme.fontColorHover};
    background-color: ${({ theme }) => theme.secondaryColor2};
    border-color: ${({ theme }) => theme.secondaryColor2};
  }
`;

const Button = styled.button`
  ${ButtonStyle}
`;

export const BorderedButton = styled.button`
  ${ButtonStyle}
  background-color: transparent;
  border: 2px solid;
  border-color: ${({ theme }) => theme.secondaryColor0};

  :hover {
    background-color: ${({ theme }) => theme.secondaryColor1};
  }

  :active {
    background-color: ${({ theme }) => theme.secondaryColor2};
  }
`;

export default Button;
