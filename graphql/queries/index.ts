import { gql } from '@apollo/client';

export const PAST_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_site {
        site_name
      }
      links {
        article_link
        video_link
        wikipedia
        flickr_images
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
        id
      }
      id
      launch_success
      launch_year
      launch_date_utc
      launch_date_local
    }
  }
`;

export const COMPANY = gql`
  {
    company {
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      name
      summary
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      ceo
      coo
      cto
      employees
    }
  }
`;
