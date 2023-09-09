import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import logoImage from '../../../../../assets/images/LogoMain.png';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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

  return (
    <header className={isSticky ? styles.sticky : ''}>
      <div className={styles.container}>
        <a className="logoGui" href="/home">
          <img src={logoImage} alt="logo" width="100" />
        </a>
        <nav>
          <ul className={styles.MainGui}>
            <li>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>КОЛЕКЦИИ</button>
                <div className={styles.dropdownContent}>
                  <a href="src/components/index#components">Ссылка 1</a>
                  <a href="src/components/index#components">Ссылка 2</a>
                  <a href="src/components/index#components">Ссылка 3</a>
                </div>
              </div>
            </li>
            <li>
              <Link to="/home">ХИТЫ</Link>
            </li>
            <li>
              <Link to="/home">SALE</Link>
            </li>
            <li>
              <Link to="/home">СНИЖЕНА ЦЕНА</Link>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/about">О НАС</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
