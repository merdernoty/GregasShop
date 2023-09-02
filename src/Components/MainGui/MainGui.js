import React from 'react';
import styles from './MainGui.module.scss'
import logoImage from "../../img/LogoMain.png";
import classNames from 'classnames';

export const MainGui = () => {
    return (
        <header className={styles.MainWrapper}>
            <div className={styles.MainLogo}>
                <a href='/'>GregasShop</a>
            </div>
            <ul className={styles.MenuWrapper}>
               <li>Коллекции</li>
               <li>Хиты</li>
               <li>Sale</li>
               <li>Новые поступления</li>
            </ul>
        </header>
    );
}