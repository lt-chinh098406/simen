import React from 'react';
import styles from './styles.module.scss';

function Navigation() {
  return (
    <ul>
      <li>
        <a href="/#">Home</a>
        <ul>
          <li>
            <a href="/#">Homepage1</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
export default Navigation;
