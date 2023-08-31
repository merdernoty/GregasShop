import React, { useState, useEffect } from 'react';
import styles from './MainGui.module.scss'
import logoImage from "../../img/LogoMain.png";
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

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isSticky ? styles.sticky : ''}>
            <div className={styles.container}>
                <a className='logoGui' href='/home'>
                    <img src={logoImage} alt='logo' width="100"/>
                </a>
                <nav>
                    <ul className={styles.MainGui}>
                        <li>
                            <div className={styles.dropdown}>
                                <button className={styles.dropbtn}>КОЛЕКЦИИ</button>
                                <div className={styles.dropdownContent}>
                                    <a href="src/Components#">Ссылка 1</a>
                                    <a href="src/Components#">Ссылка 2</a>
                                    <a href="src/Components#">Ссылка 3</a>
                                </div>
                            </div>
                        </li>
                        <li><a href='/home'>ХИТЫ</a></li>
                        <li><a href='/home'>SALE</a></li>
                        <li><a href='/home'>СНИЖЕНА ЦЕНА</a></li>
                        <li><a href='/home'>НОВИНКИ</a></li>
                        <li><a href='/home'>НОВЫЕ ПОСТУПЛЕНИЯ</a></li>
                        <li><a href='/home'>О НАС</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
