import React from 'react';
import './styles.scss';

function HeaderTopR() {
  return (
    <div className="container">
      <div className="item">
        <ion-icon name="person"></ion-icon>
        <span>My Account</span>
      </div>
      <div className="item">
        <ion-icon name="heart-outline"></ion-icon>
        <span>Wishlist</span>
      </div>
      <div className="item">
        <ion-icon name="checkbox-outline"></ion-icon>
        <span>Checkout</span>
      </div>
      <div className="item">
        <ion-icon name="checkbox-outline"></ion-icon>
        <span>Login</span>
      </div>
    </div>
  );
}
export default HeaderTopR;
