import React, { useState, useEffect } from 'react';
import "./MainGui.scss";
import logoImage from "../img/LogoMain.png";

function MainGui() {
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
        <header className={isSticky ? 'sticky' : ''}>
            <div className='container'>
<a className='logoGui' href='/home'><img src={logoImage} alt='logo' width="100"/></a>
    <nav>
     <ul className="MainGui">
   <li><div class="dropdown">
    <button class="dropbtn">КОЛЕКЦИИ
    </button>
    <div class="dropdown-content">
      <a href="#">Ссылка 1</a>
      <a href="#">Ссылка 2</a>
      <a href="#">Ссылка 3</a>
    </div>
  </div></li>
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

export default MainGui;
