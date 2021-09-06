// Libraries
import React, { FC, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

// Components
import ThemeToggleButton from './ThemeToggleButton';

// Hooks
import { useRouter } from 'next/router';

export const NAVBAR_HEIGHT = 25;

const NavbarHeader = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColorLight};
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (max-width: 1267px) {
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

  @media screen and (min-width: 1268px) {
    display: flex;
  }

  @media screen and (max-width: 1267px) {
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
    margin: 0;
    padding-bottom: 20px;
  }
`;

const NavbarWrapper = styled.div`
  padding: 25px;
  max-height: ${NAVBAR_HEIGHT}px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1267px) {
    justify-content: space-between;
  }
`;

const NavbarMenuButton = styled.button`
  cursor: pointer;
  display: none;
  height: 30px;
  width: 30px;
  background-color: transparent;
  padding: 0;
  border: 0;
  margin: 0;

  @media screen and (max-width: 1267px) {
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

  &.active a,
  & a:hover {
    color: ${({ theme }) => theme.fontColorActive};
    outline: 0;
  }

  & a,
  a:focus,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  @media screen and (min-width: 1268px) {
    & a:not(:hover):not(:focus)::after {
      height: 0;
      width: 0;
      left: 50%;
      opacity: 0;
    }

    &.active a::after,
    & a:hover::after,
    & a::after {
      transition: 0.2s;
      transition-timing-function: cubic-bezier(0.58, 0.3, 0.005, 1);
      z-index: 2;
      transform: scale(1);
      background-color: ${({ theme }) => theme.fontColorActive};
      display: block;
      position: absolute;
      content: "";
      bottom: 0;
      height: 3px;
      width: 70%;
      left: 15%;
    }

    &.active a::after,
    & a:hover::after {
      width: 70% !important;
      height: 3px !important;
      opacity: 1 !important;
      left: 15% !important;
    }
  }
`;

const LogoUrl = styled.a`
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  cursor: pointer;
`;

const NavbarBrandLogo = styled.img`
  max-width: 180px;

  @media screen and (max-width: 1267px) {
    max-width: 120px;
  }
`;

type URLType = {
  url: string;
  label: string;
  activeRoute?: string;
};

type Props = {
  logoUrl?: string;
  logoImgSrc?: string;
  logoImgAlt?: string;
  logoText?: string;
  menuURLs?: URLType[];
  toggleTheme?: () => void;
  theme: string;
} & HTMLAttributes<HTMLElement>

const Navbar: FC<Props> = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const URLS = (props.menuURLs || []).map(u => {
    const activeUrlRegex = u.activeRoute ? new RegExp(u.activeRoute) : undefined;
    const isActive = activeUrlRegex ? activeUrlRegex.test(router.pathname) : undefined;
    const activeClassName = isActive ? 'active' : undefined;

    return (
      <NavItem key={u.label} className={activeClassName}>
        <Link href={u.url}>
          <a className={activeClassName}>{u.label}</a>
        </Link>
      </NavItem>
    );
  }); 

  return (
    <NavbarHeader>
      <NavbarWrapper>
        <Link href='/' passHref>
          <LogoUrl>
            {!props.logoImgSrc && props.logoText}
            <NavbarBrandLogo src={props.logoImgSrc} alt={props.logoImgAlt} />
          </LogoUrl>
        </Link>
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
            {URLS}
            <ThemeToggleButton theme={props.theme} toggleTheme={props.toggleTheme}>
              Toggle theme
            </ThemeToggleButton>
          </NavbarUl>
        </nav>
      </NavbarWrapper>
    </NavbarHeader>
  );
};

export default Navbar;