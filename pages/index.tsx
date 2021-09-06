import Layout from 'components/Layout';
import client from 'graphql/lib/apollo-client';
import { COMPANY, PAST_LAUNCHES } from 'graphql/queries';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = (props) => {
  return (
    <Layout>
      Hola!
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const launchesData = await client.query({
    query: PAST_LAUNCHES
  });
  const companyData = await client.query({
    query: COMPANY
  });

  const launchesPast = { ...launchesData.data };
  const company = { ...companyData.data };

  return {
    props: {
      launchesPast,
      company
    }
  }
};

export default Home
