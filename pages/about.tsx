// Components
import Layout from 'components/Layout';

// GraphQL
import client from 'graphql/lib/apollo-client';
import { COMPANY, PAGE_SIZE, PAST_LAUNCHES } from 'graphql/queries';

// Types
import { GetStaticProps, NextPage } from 'next';
import { CompanyResponseType } from 'graphql/queries/company.type';

type Props = {
  company: CompanyResponseType;
}

const AboutPage: NextPage = () => {
  return <Layout></Layout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const companyData = await client.query({
    query: COMPANY
  });
  
  const company = {...companyData.data.company};
  
  return {
    props: {
      company
    }
  };
};

export default AboutPage;
