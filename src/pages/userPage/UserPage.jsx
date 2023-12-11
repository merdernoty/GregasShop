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
        <div className={styles.userData}>
          <div className={styles.userTitle}>
            <div className={styles.subtitle}>Личные данные</div>
          </div>
       <div className={styles.userInfo}>
         <ul className={styles.listInfo}>
           <li>Андрей</li>
           <li>frfrfrfr@gmail.com</li>
           <li>+123456789</li>

         </ul>
<a href="/userPage">Изменить личные данные</a>
         <br/>
<a href="/userPage">Изменить пароль</a>

       </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
