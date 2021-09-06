// Libraries
import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  border: 0;
  padding: 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.secondaryColor0};

  :hover {
    color: ${({ theme }) => theme.fontColorHover};
    background-color: ${({ theme }) => theme.secondaryColor1};
  }

  :active {
    color: ${({ theme }) => theme.fontColorHover};
    background-color: ${({ theme }) => theme.secondaryColor2};
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
