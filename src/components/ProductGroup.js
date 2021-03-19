import React from 'react';
import Product from './Product';
import { Col } from 'react-bootstrap';

const ProductGroup = ({ data }) => {
  return data?.groups.map((product, index) => (
    <Col lg={4} sm={12} key={index.toString()}>
      <Product product={product} />
    </Col>
  ));
};

export default ProductGroup;
