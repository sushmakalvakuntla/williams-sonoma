import React from 'react';
import { mount } from 'enzyme';
import Product from './Product';
import { Modal, Image } from 'react-bootstrap';

describe('Product', () => {
  const product = {
    id: 'festive-stripe-salad-plate-d6827',
    name: 'Festive Stripe Salad Plate',
    links: {
      www: 'https://www.westelm.com/products/festive-stripe-salad-plate-d6827/',
    },
    price: {
      regular: 10.5,
      selling: 10.5,
    },
    hero: {
      size: 'm',
      meta: '',
      alt: '',
      rel: 'hero',
      width: 363,
      href:
        'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202041/0022/festive-stripe-salad-plate-m.jpg',
      height: 363,
    },
    images: [
      {
        size: "m",
        meta: "",
        alt: "",
        rel: "althero",
        width: 363,
        href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-2-m.jpg",
        height: 363
      },
    ],
  };

  let modalShow = false;
  let wrapper;
  beforeEach(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    wrapper = mount(<Product show={modalShow} product={product} />);
  });

  it('renders Product correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Image component', () => {
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it('renders Modal component on clicking image', () => {
    expect(wrapper.find(Modal).prop('show')).toBe(false);

    wrapper.find('Image').simulate('click');
    expect(wrapper.find(Modal).prop('show')).toBe(true);
  });

  it('renders major html elements', () => {
    expect(wrapper.find('.product-name').length).toEqual(1);
    expect(wrapper.find('.product-price').length).toEqual(1);
  });
});