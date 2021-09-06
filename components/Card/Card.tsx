// Libraries
import styled from 'styled-components';

// Types
import { FC } from 'react';

const CardContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColorDark};
  border-radius: 10px;
  border: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.12),
    0px 1px 1px rgba(0,0,0,0.04);
`;

const Card: FC = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
);

export default Card;
