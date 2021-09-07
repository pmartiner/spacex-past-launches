// Libraries
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import {
  FaTwitter as Twitter,
  FaFlickr as Flickr,
  FaLink as Website
} from 'react-icons/fa';

// Components
import Layout from 'components/Layout';

// GraphQL
import client from 'graphql/lib/apollo-client';
import { COMPANY } from 'graphql/queries';

// Types
import { GetStaticProps, NextPage } from 'next';
import { CompanyResponseType } from 'graphql/queries/company.type';

// Constants
import { NAVBAR_HEIGHT } from 'components/Navbar/Navbar';

const AboutContainer = styled.div`
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

const CompanyImageContainer = styled.div`
  align-self: center;
  display: flex;
  flex-flow: column;
  font-size: 14px;
`;

const ImageLicenseLink = styled.a`
  text-decoration:  solid underline ${({ theme }) => theme.primaryColor4} 2px;;
  color: ${({ theme }) => theme.primaryColor4};

  :hover {
    color: ${({ theme}) => theme.fontColorHover};
    text-decoration: solid underline ${({ theme }) => theme.fontColorHover} 2px;
  }
`;

const CompanyImage = styled(Image)`
  border-radius: 30px;
`;

const CompanyHeader = styled.h1`
  font-weight: bolder;
  font-size: 60px;
  text-align: center;

  @media screen and (min-width: 1268px) {
    font-size: 80px;
  }
`;

const Summary = styled.p`
  font-weight: normal;
  font-size: 30px;
`;

const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  margin-top: 40px;
`;

const SocialMediaLink = styled.a`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
  justify-content: space-around;
  color: ${({ theme }) => theme.fontColor};
  margin: 10px 0;

  & svg {
    padding: 0 10px;
  }

  :hover {
    color: ${({ theme}) => theme.fontColorHover};
    text-decoration: solid underline ${({ theme }) => theme.fontColorHover} 2px;
  }
`;

const Address = styled.p`
  padding-top: 20px;
  font-size: 24px;
  align-self: center;
`;

type Props = {
  company: CompanyResponseType;
}

const AboutPage: NextPage<Props> = ({ company }) => {
  return (
    <Layout>
      <Head>
        <title>
          Welcome to SpaceX Past Launches, by Pablo Martínez
        </title>
      </Head>
      <AboutContainer>
        <CompanyHeader>
          {company.name}
        </CompanyHeader>
        {company.summary && company.ceo && company.cto && company.coo &&
        <Summary>
          {company.summary}
          {' '}
          The current CEO is {company.ceo}, the current CTO is {company.cto} and the current COO is {company.coo}.
        </Summary>}
        {company.valuation && company.founded && company.founder && company.employees &&
        <Summary>
          The company was founded by {company.founder} on {company.founded}.
          {' '}
          Currently, it has {company.employees} employees and is valued at
          {' '}
          {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(company.valuation)} USD.
          {' '}
          Quite a huge leap since its foundation!
        </Summary>}

        <CompanyImageContainer>
          <CompanyImage
            src='https://live.staticflickr.com/6144/5926572939_208110ec68_b.jpg'
            alt='SpaceX Launch Control Center'
            width={410}
            height={273}
          />
          <ImageLicenseLink href='https://www.flickr.com/photos/11866475@N05/5926572939'>SpaceX Launch Control Center</ImageLicenseLink>
          <span>
            {' '}
            by
            {' '}
            <ImageLicenseLink href='https://www.flickr.com/photos/11866475@N05'>
              LordJumper
            </ImageLicenseLink>
            {' '}
            is licensed under
            {' '}
            <ImageLicenseLink href='https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html'>
              CC BY-NC-SA 2.0
            </ImageLicenseLink>
          </span>
        </CompanyImageContainer>
        <SocialMediaContainer>
          {company.links?.flickr &&
          <SocialMediaLink href={company.links.flickr} target='_blank' rel='noopener noreferrer'>
            <Flickr title='Flickr icon'/>
            <span>Flickr</span>
          </SocialMediaLink>}
          {company.links?.twitter &&
          <SocialMediaLink href={company.links.twitter} target='_blank' rel='noopener noreferrer'>
            <Twitter title='Twitter icon'/>
            <span>Twitter</span>
          </SocialMediaLink>}
          {company.links?.website &&
          <SocialMediaLink href={company.links.website} target='_blank' rel='noopener noreferrer'>
            <Website title='Hyperlink icon' />
            <span>Website</span>
          </SocialMediaLink>}
          {company.links?.elon_twitter &&
          <SocialMediaLink href={company.links.elon_twitter} target='_blank' rel='noopener noreferrer'>
            <Twitter title='Twitter icon' />
            <span>Elon Musk&apos;s Twitter</span>
          </SocialMediaLink>}
        </SocialMediaContainer>
        {company.headquarters &&
        company.headquarters.address &&
        company.headquarters.city &&
        company.headquarters.state &&
        <Address>
          {company.headquarters.address}. {company.headquarters.city}, { company.headquarters.state}.
        </Address>}
      </AboutContainer>
    </Layout>
  );
};

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
