import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import ProductGroup from './components/ProductGroup';
import Data from './Data';

const App = () => {
  return (
    <Container>
      <Row>
        <ProductGroup data={Data} />
      </Row>
    </Container>
  );
};

export default App;
