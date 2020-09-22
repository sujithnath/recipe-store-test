import React, { FunctionComponent } from 'react';
import Header from '../Header';
import styled from 'styled-components';
import PageHead from '../PageHead';
import { GlobalStyles } from "./style";

const Container = styled.div`
  width: 1000px;
  margin: 10px auto 0;
  height: 100%;
  overflow: hidden;
`;


const MainLayout: React.FC = ({ children }) => (
  <>
    <PageHead />
    <Header />
    <GlobalStyles />
    <Container>
      {children}
    </Container>
  </>
)


export default MainLayout;
