// Libraries
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';

// Styles
import Navbar from 'components/Navbar/Navbar';
import styled, { css, ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from 'styles/theme';

// Constants
export const siteTitle = 'SpaceX Past Launches';

type Props = {
  pages?: boolean;
};

const MainContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  padding: 30px 0;
`;

const OneColumnStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;

const MultiColumnStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
`;

const MainContentGrid = styled.div<Props>`
  ${OneColumnStyle}
  
  @media only screen and (min-width: 1268px) {
    ${({ pages }) => pages ?  MultiColumnStyle : OneColumnStyle}
  }
`;

const URLs = [
  {
    label: 'Launches',
    url: '/launches/page/1',
    activeRoute: '/launches/page/'
  },
  {
    label: 'About SpaceX',
    url: '/about',
    activeRoute: '/about'
  }
];

const Layout: FC<Props> = ({ children }) => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    }

    else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <meta
          name='description'
          content='SpaceX list of past launches'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar
          logoText={siteTitle}
          toggleTheme={toggleTheme}
          theme={theme}
          menuURLs={URLs}
        />
        <MainContent>
          <MainContentGrid>
            {children}
          </MainContentGrid>
        </MainContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;