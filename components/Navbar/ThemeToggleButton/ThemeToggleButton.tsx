// Libraries
import { FC } from 'react';
import styled from 'styled-components';

// Assets
import {
  FaRegMoon as Moon,
  FaRegSun as Sun
} from 'react-icons/fa';

type Props = {
  theme: string;
  toggleTheme?: () => void;
}

type ToggleButtonProps = {
  lightTheme: boolean;
}

const ToggleButton = styled.button<ToggleButtonProps>`
  background: ${({ theme }) => theme.secondaryColor2};
  border: 2px solid ${({ theme }) => theme.secondaryColor3};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 2.5rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
    }
  }
`;

const ThemeToggleButton: FC<Props> = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleButton lightTheme={isLight} onClick={toggleTheme} >
      <Moon />
      <Sun />
    </ToggleButton>
  );
};

export default ThemeToggleButton;
