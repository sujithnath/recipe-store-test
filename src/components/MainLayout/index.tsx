import React, { FunctionComponent } from 'react';
import Header from '../Header';
import styled from 'styled-components';
import PageHead from '../PageHead';
import { GlobalStyles, Container } from "./style";

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
