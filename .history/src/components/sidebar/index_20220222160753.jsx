import React from 'react';
import styles from './styles.module.scss';

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
    <div className={styles.sidebar}>
      {items.map((item) => (
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          key={item.id}
          className={styles.box}
        >
          <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
        </Slider>
      ))}
    </div>
  );
}
export default SideBar;
