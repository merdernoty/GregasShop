import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import LogoImage from '../../img/LogoMain.png';
import classNames from 'classnames';
import Katalog from '../Katalog';
export const MainGui = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = classNames(styles.MainWrapper, {
    [styles.sticky]: isSticky,
  });

   return (
    <header className={headerClasses}>
      <div className={styles.MainLogo}><img src={LogoImage}></img></div>
      <ul className={styles.MenuWrapper}>
        <li>Коллекции</li>
        <li>Хиты</li>
        <li>Sale</li>
        <li>Новые поступления</li>
      </ul>
      {isSticky && <Katalog className={styles.Job + ' ' + styles.stickyKatalog} />}  //Стили для Меню
    </header>
  );
};