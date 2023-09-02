import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import logoImage from '../../img/LogoMain.png';
import classNames from 'classnames';

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
      <div className={styles.MainLogo}>GregasShop</div>
      <ul className={styles.MenuWrapper}>
        <li>Коллекции</li>
        <li>Хиты</li>
        <li>Sale</li>
        <li>Новые поступления</li>
      </ul>
    </header>
  );
};