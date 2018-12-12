import * as React from 'react';
import { Container } from 'semantic-ui-react';

import MainContainer from '../components/mainContainer';
import Footer from '../components/footer';
import Heading from '../components/heading';
import NavBar from '../components/navBar';

const App = () => (
  <Container fluid>
    <NavBar />
    <Heading />
    <MainContainer />
    <Footer />
  </Container>
);

export default App;
