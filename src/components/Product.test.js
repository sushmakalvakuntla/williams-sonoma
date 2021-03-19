import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

it('renders Product correctly', () => {
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
  };
  const component = shallow(<Product product={product} />);
  expect(component).toMatchSnapshot();
});
