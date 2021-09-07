// Libraries
import { ButtonHTMLAttributes, FC } from 'react';
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
} & ButtonHTMLAttributes<HTMLButtonElement>

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
    width: 20px;
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

const ThemeToggleButton: FC<Props> = ({ theme, toggleTheme, ...rest }) => {
  const isLight = theme === 'light';

  return (
    <ToggleButton
      {...rest}
      lightTheme={isLight}
      onClick={toggleTheme}
      aria-label={`Toggle ${isLight ? 'light' : 'dark'} theme`}
    >
      <Moon title='Moon icon' />
      <Sun title='Sun icon' />
    </ToggleButton>
  );
};

export default ThemeToggleButton;
