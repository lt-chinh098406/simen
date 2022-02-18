import React from 'react';
import styles from './styles.module.scss';
import Navigation from '../navigation/index';
import Search from '../search/index';
import Cart from '../cart/index';

function Menu() {
  return (
    <div className={styles.main}>
      <Navigation />
      <div>
        <Search />
        <Cart />
      </div>
    </div>
  );
}
export default Menu;
