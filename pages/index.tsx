// Libraries
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { FaHeart as Heart } from 'react-icons/fa';

// Components
import Layout from 'components/Layout';
import Button from 'components/Button';

// Types
import type { NextPage } from 'next';

// Constants
import { NAVBAR_HEIGHT } from 'components/Navbar/Navbar';

const HomeContainer = styled.div`
  min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: baseline;
  padding: 0 2rem;

  @media screen and (min-width: 1268px) {
    padding: 0 8rem;
  }
`;

const WelcomeHeader = styled.h1`
  font-weight: normal;
  font-size: 60px;
  text-align: center;
  align-self: center;

  @media screen and (min-width: 1268px) {
    font-size: 80px;
  }
`;

const DescriptionHeader = styled.h2`
  font-weight: normal;
  font-size: 30px;

  @media screen and (min-width: 1268px) {
    font-size: 50px;
  }
`;

const Strong = styled.strong`
  font-weight: bolder;
`;

const StartButton = styled(Button)`
  max-width: 300px;
  width: 100%;
  align-self: center;
  font-size: 30px;
  margin-top: 20px;

  @media screen and (min-width: 1268px) {
    font-size: 50px;
  }
`;

const MadeWithLoveByPablo = styled.p`
  font-weight: bold;
  font-size: 20px;
  align-self: center;
  padding-top: 30px;

  @media screen and (min-width: 1268px) {
    font-size: 30px;
  }
`;

const HeartContainer = styled.span`
  color: ${({ theme }) => theme.failureColor};
`;

const Home: NextPage = () => {
  return (
    <Layout pages={false}>
      <Head>
        <title>
          Welcome to SpaceX Past Launches, by Pablo Martínez
        </title>
      </Head>
      <HomeContainer>
        <WelcomeHeader>
          Welcome to <Strong><em>SpaceX Past Launches</em></Strong>.
        </WelcomeHeader>
        <DescriptionHeader>
          The goal of this project is to show <Strong><em>you</em></Strong> SpaceX&apos;s past launches history. Throught this website you&apos;ll be able to see some pictures of said launches, as well as its date and its Wikipedia article (if it has any).
        </DescriptionHeader>
        <DescriptionHeader>
          Please click the start button and <Strong><em>enjoy the ride</em></Strong>.
        </DescriptionHeader>
        <Link href='/launches/page/1' passHref>
          <StartButton as='a'>
            Start
          </StartButton>
        </Link>
        <MadeWithLoveByPablo>
          Made with
          {' '}
          <HeartContainer>
            <Heart />
          </HeartContainer>
          {' '}
          by Pablo Martínez
        </MadeWithLoveByPablo>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
