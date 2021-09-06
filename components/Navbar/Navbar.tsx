// Libraries
import React, { FC, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

const NavbarHeader = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColorLight};
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

type NavbarUlProps = {
  active: boolean;
}

const NavbarUl = styled.ul<NavbarUlProps>`
  list-style-type: none; 

  @media screen and (min-width: 1025px) {
    display: flex;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.backgroundColorLight};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    opacity: ${props => props.active ? 1 : 0};
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  }
`;

const NavbarWrapper = styled.div`
  padding: 25px;
  max-height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const NavbarMenuButton = styled.button`
  cursor: pointer;
  display: none;
  height: 30px;
  width: 30px;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const NavItem = styled.li`
  & a {
    display: block;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 8px 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    transition: 0.2s;
    line-height: 20px;
    display: flex;
    align-items: center;
    position: relative;
  }

  & a:hover {
    color: ${({ theme }) => theme.fontColorHover};
    outline: 0;
  }

  & a,
  a:focus,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  @media screen and (min-width: 1025px) {
    & a:not(:hover):not(:focus)::after {
      width: 0;
      height: 0;
      width: 0;
      left: 50%;
      opacity: 0;
    }

    & a:hover::after,
    & a::after {
      transition: 0.2s;
      transition-timing-function: cubic-bezier(0.58, 0.3, 0.005, 1);
      z-index: 2;
      transform: scale(1);
      background-color: ${({ theme }) => theme.backgroundColor};
      display: block;
      position: absolute;
      content: "";
      bottom: 0;
      height: 3px;
      width: 100%;
      left: 0;
    }
  }
`;

const NavbarBrandLogo = styled.img`
  max-width: 180px;

  @media screen and (max-width: 1024px) {
    max-width: 120px;
  }
`;

type URLType = {
  url: string;
  label: string;
};

type Props = {
  logoUrl?: string;
  logoImgSrc?: string;
  logoImgAlt?: string;
  menuURLs?: URLType[];
  toggleTheme?: () => void;
  theme: string;
} & HTMLAttributes<HTMLElement>

const Navbar: FC<Props> = (props: Props) => {
  const [toggle, setToggle] = useState(false);

  const URLS = (props.menuURLs || []).map(u => (
    <NavItem key={u.label}>
      <Link href={u.url}>
        <a>{u.label}</a>
      </Link>
    </NavItem>
  )); 

  return (
    <NavbarHeader>
      <NavbarWrapper>
        <a href={props.logoUrl}>
          <NavbarBrandLogo src={props.logoImgSrc} alt={props.logoImgAlt} />
        </a>
        <nav>
          <NavbarMenuButton
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle ? 'true' : 'false'}
            aria-label={toggle ? 'close menu' : 'menu'}
            type='button'
          >
            <Bars />
          </NavbarMenuButton>
          <NavbarUl active={toggle}>
            <ThemeToggleButton theme={props.theme} toggleTheme={props.toggleTheme}>
              Toggle theme
            </ThemeToggleButton>
            {URLS}
          </NavbarUl>
        </nav>
      </NavbarWrapper>
    </NavbarHeader>
  );
};

export default Navbar;