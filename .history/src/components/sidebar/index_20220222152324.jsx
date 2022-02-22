import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === items.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 1000);

    return () => {
      clearTimeout();
    };
  }, [index]);
  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <div key={item.id} className={styles.box}>
          <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
export default SideBar;
