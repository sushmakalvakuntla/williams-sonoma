import React from 'react';
import { shallow } from 'enzyme';
import CarouselComponent from './CarouselComponent';

it('renders CustomCarousel correctly', () => {
  const images = [
    {
      size: "m",
      meta: "",
      alt: "",
      rel: "althero",
      width: 363,
      href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202111/0061/walnut-led-desk-lamp-2-m.jpg",
      height: 363
    },
  ];

  const component = shallow(<CarouselComponent images={images}/>);
  expect(component).toMatchSnapshot();
});
