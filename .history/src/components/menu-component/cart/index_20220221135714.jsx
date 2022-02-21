import React from 'react';
import styles from './styles.module.scss';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles['cart-box']}>
        <div className={styles['cart-icon-box']}>
          <ion-icon name="cart"></ion-icon>
        </div>
        <span className={styles['cart-text']}>0</span>
        <span>( items )</span>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.content}>
          <div className={styles.container}>
            <ul className={styles.list}>
              <li className={styles.item}>No products in the cart</li>
            </ul>
            <div>
              <span>Total:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
