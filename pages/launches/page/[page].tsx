// Libraries
import styled from 'styled-components';
import Link from 'next/link';
import { utcToZonedTime } from 'date-fns-tz';
import intlFormat from 'date-fns/intlFormat';

// Hooks
import { useRouter } from 'next/router';

// Components
import Layout from 'components/Layout';
import ImageCard from 'components/ImageCard/ImageCard';

// Utils
import generatePages from 'lib/pages';
import getRandomInt from 'lib/random';

// GraphQL
import client from 'graphql/lib/apollo-client';
import { NUMBER_PAGES, PAGE_SIZE, PAST_LAUNCHES } from 'graphql/queries';

// Types
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { LaunchesPastResponseType } from 'graphql/queries/launchesPast.type';
import Button, { BorderedButton } from 'components/Button';
import { ReactNode } from 'react';

type PageProps = {
  launchesPast: LaunchesPastResponseType[];
}

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  min-height: 500px;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  height: 300px;
  text-align: center;
`;

type MissionNameProps = {
  success?: boolean;
}

const MissionName = styled.h3<MissionNameProps>`
  margin: 0;
  color: ${({ success, theme }) => success ? theme.successColor : theme.failureColor};
`;

const Pagination = styled.section`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1268px) {
    grid-column: 1 / 5;
  }
`;

const PaginationButtonContainer = styled.div`
  margin: 0 15px;
`;

const Page: NextPage<PageProps> = ({ launchesPast }) => {
  const { query } = useRouter();
  const pages = generatePages(NUMBER_PAGES).map(p => ({ page: p.params.page,}));

  const launches = launchesPast.map(launch => {
    const date = new Date(launch.launch_date_utc || '');
    const timeZone = 'America/Mexico_City';
    const zonedDate = utcToZonedTime(date, timeZone);
    const formattedDate = intlFormat(zonedDate, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });

    return (
      <CardContainer key={launch.id}>
        <ImageCard
          imageProps={{
            src: launch.links?.flickr_images && launch.links.flickr_images.length > 0
              ? launch.links.flickr_images[getRandomInt(0, launch.links?.flickr_images.length)]
              : '/images/no-image.jpg',
            width: 300,
            height: 300,
            alt: launch.mission_name
              ? `${launch.mission_name} image`
              : 'No image'
          }}
        >
          <CardContent>
            <MissionName success={launch.launch_success}>
              Mission name:
              {' '}
              {launch.mission_name}
              {' '}
              {launch.launch_success ? '✅' : '❌'}
            </MissionName>
            <time dateTime={launch.launch_date_utc || ''}>{formattedDate}</time>
            {launch.links?.wikipedia
              ? <Button as='a' href={launch.links.wikipedia} target='_blank' rel='noopener noreferrer'>
                Wikipedia article
              </Button>
              : <em>
                No Wikipedia article  
              </em>}
          </CardContent>
        </ImageCard>
      </CardContainer>
    );
  });

  const totalPages = pages.map(el => {
    let button: ReactNode;

    if (el.page === query.page) {
      button = (
        <Link href={`/launches/page/${el.page}`} passHref>
          <Button as='a' target='_blank' rel='noopener noreferrer'>
            {el.page}
          </Button>
        </Link>
      );
    }
    else {
      button = (
        <Link href={`/launches/page/${el.page}`} passHref>
          <BorderedButton as='a' target='_blank' rel='noopener noreferrer'>
            {el.page}
          </BorderedButton>
        </Link>
      );
    }

    return (
      <PaginationButtonContainer key={el.page}>
        {button}
      </PaginationButtonContainer>
    );
  });

  return (
    <Layout pages>
      {launches}
      <Pagination>
        {totalPages}
      </Pagination>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const launchesData = await client.query({
    query: PAST_LAUNCHES,
    variables: {
      limit: PAGE_SIZE,
      offset: params?.page && !Array.isArray(params.page)
        ? parseInt((params.page as string), 10) * PAGE_SIZE
        : 0
    }
  });
  
  const launchesPast: LaunchesPastResponseType[] = [...launchesData.data.launchesPast];
  
  return {
    props: {
      launchesPast
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = generatePages(NUMBER_PAGES);

  return {
    paths,
    fallback: false
  };
};

export default Page;
