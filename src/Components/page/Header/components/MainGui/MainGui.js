import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss';
import LogoImage from '../../../../../assets/images/LogoMain.png';
import { Link, useLocation } from 'react-router-dom';
import { Search, Cart } from '../index';
import user from '../../../../../assets/images/user.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const MainGui = ({ searchValue, setSearchValue }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleItemClick = () => {
    setShow(false);
  };

  return (
    <header className={styles.MainWrapper}>
      <div className={styles.Headerbox}>
        <Link to="/">
          <img className={styles.GregaLogo} src={LogoImage} alt="Logo"></img>
        </Link>
        <div className={styles.menuItems}>
          <div className={styles.Catalog}>
            <Link to="/catalogpage" className={styles.itemText}>
              Каталог
            </Link>
          </div>
          <div className={styles.Item}>
            <Link className={styles.itemText} to="/all">
              ALL
            </Link>
          </div>
          <div className={styles.Item}>
            <Link to="/hits" className={styles.itemText}>
              Хиты
            </Link>
          </div>
          <div className={styles.Item}>
            <Link to="/" className={styles.itemText}>
              Скидки
            </Link>
          </div>
          <div className={styles.Item}>
            <Link to="/" className={styles.itemText}>
              Новинки
            </Link>
          </div>
          <div className={styles.ItemNav}>
            <ul className={show ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
              <div className={styles.NavList}>
                <li>
                  <Link to="/catalogpage" onClick={handleItemClick}>
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link to="/all" onClick={handleItemClick}>
                    ALL
                  </Link>
                </li>
                <li>
                  <Link to="/hits" onClick={handleItemClick}>
                    Хиты
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleItemClick}>
                    Скидки
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleItemClick}>
                    Новинки
                  </Link>
                </li>
              </div>
            </ul>
            <div onClick={() => setShow(!show)} className={styles.mobileBtn}>
              {show ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>
          </div>
          <Search className={styles.search} searchValue={searchValue} setSearchValue={setSearchValue} />
          {location.pathname !== '/Cartpage' && <Cart />}
          <img src={user} className={styles.user} alt="User" />
          <span className={styles.sign}>sign in</span>
        </div>
      </div>
    </header>
  );
};
