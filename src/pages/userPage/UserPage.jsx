import React from 'react';
import styles from './UserPage.module.scss';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link to="/">
          <span className={styles.back}>Вернуться назад</span>
        </Link>
        <div className={styles.topTitle}>
          <h1>Личный кабинет</h1>
          <p>Здравствуйте, Андрей, добро пожаловать в ваш личный кабинет</p>
        </div>
        <div className={styles.orders}>
          <div className={styles.titleOrders}>
            <div className={styles.subtitle}>Заказы</div>
          </div>
        </div>
        <div className={styles.userData}></div>
      </div>
    </div>
  );
};

export default UserPage;
