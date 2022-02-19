import React from 'react';
import styles from '../styles.module.scss';
import items from '../../data.js';

import CustomButton from '../../components/custom-button/index';

function Furniture() {
  return (
    <>
      <div className={styles.container}>
        {items
          .filter((item) => item.furniture === true)
          .map((item) => (
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={item.imageUrl} alt="" />
                <div className={styles.note}>
                  <CustomButton
                    text={`ADD TO CART`}
                    className={styles.button}
                    icon={<ion-icon name="cart"></ion-icon>}
                  />
                  <div className={styles['icon-box']}>
                    <CustomButton
                      className={styles.icon}
                      icon={<ion-icon name="heart"></ion-icon>}
                    />
                    <CustomButton
                      className={styles.icon}
                      icon={<ion-icon name="shuffle"></ion-icon>}
                    />
                    <CustomButton className={styles.icon} icon={<ion-icon name="eye"></ion-icon>} />
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>$ {item.price}.00</p>
              </div>
            </div>
          ))}
      </div>
      <div>18 items</div>
    </>
  );
}
export default Furniture;