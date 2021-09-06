// Libraries
import Head from 'next/head';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

// Styles
import Navbar from 'components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from 'styles/theme';

// Constants
const name = 'Pablo Martínez';
export const siteTitle = 'My first Next.js website!';

type Props = {
  home?: boolean;
};

const Layout: FC<Props> = ({ home, children }) => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learning how to use Next.js :)'
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
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <main>{children}</main>
      </ThemeProvider>
    </div>
  );
}

export default Layout;