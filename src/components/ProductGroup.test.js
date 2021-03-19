import React from 'react';
import { shallow } from 'enzyme';
import ProductGroup from './ProductGroup';

it('renders ProductGroup correctly', () => {
  const component = shallow(<ProductGroup />);
  expect(component).toMatchSnapshot();
});
