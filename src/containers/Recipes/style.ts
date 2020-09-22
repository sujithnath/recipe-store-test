import styled from 'styled-components';

export const MainTitle = styled.h2`
  font-weight: normal;
  font-size: 30px;
  text-align: center;
  padding: 40px 0;
`;

export const Items = styled.div`
  display: grid;
  grid-template-rows: auto;
  margin-bottom: 100px;
  grid-gap: 26px;
  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`;
