// Libraries
import React, { FC, HTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import { FaBars, FaGithub as GitHub } from 'react-icons/fa';
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
  display: flex;

  @media screen and (min-width: 1268px) {
    flex-flow: row nowrap;
    align-items: center;
  }

  @media screen and (max-width: 1267px) {
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    padding-left: 0;
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
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: ${({ theme }) => theme.backgroundColorDark};
  }

  & a {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    transition: 0.2s;
    line-height: 20px;
    display: flex;
    align-items: center;
    position: relative;
  }

  &.active a {
    color: ${({ theme }) => theme.fontColorActive};
    outline: 0;
    font-weight: bold;
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

  @media screen and (min-width: 1268px) {
    width: auto;

    & a {
      padding: 8px 20px;
    }

    &.active {
      background-color: transparent;
    }

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
      background-color: ${({ theme }) => theme.fontColorHover};
      display: block;
      position: absolute;
      content: "";
      bottom: 0;
      height: 3px;
      width: 70%;
      left: 15%;
    }

    &.active a::after {
      background-color: ${({ theme }) => theme.fontColorActive};
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

const RegularAnchorStyle = css`
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.fontColorHover};
    text-decoration: solid underline ${({ theme }) => theme.fontColorHover} 2px;
  }

  :active {
    color: ${({ theme }) => theme.fontColorActive};
    text-decoration: solid underline ${({ theme }) => theme.fontColorActive} 2px;
  }
`;

const LogoUrl = styled.a`
  ${RegularAnchorStyle}
  font-size: 24px;

  @media screen and (min-width: 1268px) {
    font-size: 30px;
  }
`;

const NavbarBrandLogo = styled.img`
  max-width: 180px;

  @media screen and (max-width: 1267px) {
    max-width: 120px;
  }
`;

const GitHubUrl = styled.a`
  ${RegularAnchorStyle}
  font-size: 18px;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 1268px) {
    padding: 15px 20px;
    display: block;
    width: auto;
  }
`;

const ToggleThemeContainer = styled.div`
  padding: 10px 15px;;
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
            {props.logoImgSrc && <NavbarBrandLogo src={props.logoImgSrc} alt={props.logoImgAlt} />}
          </LogoUrl>
        </Link>
        <nav>
          <NavbarMenuButton
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle ? 'true' : 'false'}
            aria-label={toggle ? 'close menu' : 'menu'}
            type='button'
          >
            <Bars title='Menu bars icon' />
          </NavbarMenuButton>
          <NavbarUl active={toggle}>
            {URLS}
            <NavItem>
              <GitHubUrl
                href='https://github.com/pmartiner/spacex-past-launches'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Source Code'
              >
                <GitHub title='GitHub'/>
              </GitHubUrl>
            </NavItem>
            <NavItem>
              <ToggleThemeContainer>
                <ThemeToggleButton
                  theme={props.theme}
                  toggleTheme={props.toggleTheme}
                />
              </ToggleThemeContainer>
            </NavItem>
          </NavbarUl>
        </nav>
      </NavbarWrapper>
    </NavbarHeader>
  );
};

export default Navbar;