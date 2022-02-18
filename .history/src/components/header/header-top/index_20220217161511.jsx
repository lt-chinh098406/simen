import React from 'react';
import './styles.scss';
import FullWidth from '../../container/full-width/index';

function HeaderTop() {
  return (
    <FullWidth>
      <div className="header-top">
        <div className="header-top__container">
          <div className="header-top__item">
            <img src="" alt="" />
            <span>English</span>
          </div>
          <div className="header-top__item">
            <span>USD</span>
          </div>
        </div>
        <div className="header-top__container">
          <div className="header-top__item">
            <span>My Account</span>
          </div>
        </div>
      </div>
    </FullWidth>
  );
}
export default HeaderTop;
