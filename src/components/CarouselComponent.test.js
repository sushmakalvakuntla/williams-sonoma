import React from 'react';
import { shallow } from 'enzyme';
import CarouselComponent from './CarouselComponent';

it('renders CustomCarousel correctly', () => {
  const component = shallow(<CarouselComponent />);
  expect(component).toMatchSnapshot();
});
