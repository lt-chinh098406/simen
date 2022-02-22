import React from 'react';
import './styles.scss';

import Slider from 'react-slick';

import items from './data.js';

function SideBar() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="App">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="box">
              <img className="img" src={item.imageUrl} key={item.id} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default SideBar;
