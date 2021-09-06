import Layout from 'components/Layout';
import client from 'graphql/lib/apollo-client';
import { COMPANY, PAGE_SIZE, PAST_LAUNCHES } from 'graphql/queries';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = (props) => {
  console.log(props)
  return (
    <Layout home>
      Hola!
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const launchesData = await client.query({
    query: PAST_LAUNCHES,
    variables: {
      limit: PAGE_SIZE,
      offset: 0
    }
  });
  const companyData = await client.query({
    query: COMPANY
  });

  const launchesPast = [...launchesData.data.launchesPast];
  const company = {...companyData.data.company};

  return {
    props: {
      launchesPast,
      company
    }
  }
};

export default Home
