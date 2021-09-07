// Libraries
import styled from 'styled-components';

// Types
import { FC } from 'react';
import { FaHeart as Heart } from 'react-icons/fa';


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

const Love: FC = () => (
  <MadeWithLoveByPablo>
    Made with
    {' '}
    <HeartContainer>
      <Heart title='love'/>
    </HeartContainer>
    {' '}
    by Pablo Martínez
  </MadeWithLoveByPablo>
);

export default Love;
