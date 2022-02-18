import React from 'react';
import styles from './styles.module.scss';

import 'antd/dist/antd.css';
import { Row, Col, Button, Input } from 'antd';

import items from './data.js';

function Footer() {
  return (
    <div className={styles.footer}>
      <Row className={styles['footer-box']}>
        <Col span={6}>
          <h4 className={styles.title}>Contact us</h4>
          <div className={styles.text}>
            <div className={styles['text-box']}>
              <div className={styles.icon}>
                <ion-icon name="home"></ion-icon>
              </div>
              <p className={styles.sub}>8888 South Avenue Street, New York</p>
            </div>
            <div className={styles['text-box']}>
              <ion-icon name="call"></ion-icon>
              <div className={styles['text-sub']}>
                <p className={styles.sub}>(12) 3 456 7896</p>
                <p className={styles.sub}>(12) 3 456 7895</p>
              </div>
            </div>
            <div className={styles['text-box']}>
              <ion-icon name="home"></ion-icon>
              <div className={styles['text-sub']}>
                <p className={styles.sub}>contact@simen.com</p>
                <p className={styles.sub}>info@simen.com</p>
              </div>
            </div>
          </div>
        </Col>
        {items.map((item) => (
          <Col span={4} key={item.id}>
            <h4 className={styles.title}>{item.title}</h4>
            <ul className={styles.list}>
              <li className={styles.item}>
                {item.sub.map((sub) => (
                  <a href="/#" className={styles.link} key={sub.id}>
                    {sub.text}
                  </a>
                ))}
              </li>
            </ul>
          </Col>
        ))}
        <Col span={6}>
          <h4 className={styles.title}>Register</h4>
          <div className={styles.text}>
            <div className={styles['text-box']}>
              <p className={styles.sub}>Register your email for news</p>
            </div>
            <div className={styles['text-box']}>
              <Input className={styles.input} placeholder="Your email here" />
            </div>
            <div className={styles['text-box']}>
              <Button className={styles.button} type="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
