import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Modal } from 'react-bootstrap';
import './Product.scss';
import CarouselComponent from './CarouselComponent';

const Product = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div
      style={{
        position: 'relative',
        color: 'black',
        marginBottom: '20px',
      }}
    >
      <Image
        src={product.hero.href}
        style={{
          width: `${product.hero.width}`,
          height: `${product.hero.height}`,
        }}
        onClick={() => setShow(true)}
      />
      <div className="product-name">{`${product?.name} `}</div>
      <div className="product-price">
        {`$${
          product.price
            ? product.price.regular
            : product.priceRange.selling.high
          }`}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <CarouselComponent images={product?.images} />
        </Modal.Header>
      </Modal>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
