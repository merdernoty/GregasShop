import React, { useState } from 'react';
import Scrollbar from 'react-scrollbar';
import './Katalog.scss';

function Katalog() {
  const [isKatalogOpen, setIsKatalogOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleKatalog = () => {
    setIsKatalogOpen(!isKatalogOpen);
    setOpenSubMenus({});
  };

  const toggleSubMenu = (subMenu) => {
    setOpenSubMenus(prevState => ({
      ...prevState,
      [subMenu]: !prevState[subMenu]
    }));
  };

  return (
    <div className="katalog-container">
      <button className="katalog-button" onClick={toggleKatalog}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
</svg>
      </button>
      {isKatalogOpen && (
        <div className={`katalog-content ${isKatalogOpen ? 'open' : ''}`}>
          <Scrollbar style={{ height: '400px',scrollbarColor: 'red green'}}>
            <ul>
            <li>
              <button className="submenu-button" onClick={() => toggleSubMenu('subMenu1')}>
                Азиатская еда и напитки
              </button>
              {openSubMenus['subMenu1'] && (
                <ul className="sub-menu">
                  <li><a href="">Лапша</a></li>
                  <li><a href="">Напитки</a></li>
                  <li><a href="">Снэки</a></li>
                  <li><a href="">Сладости</a></li>
                  <li><a href="">соусы и приправы</a></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-button" onClick={() => toggleSubMenu('subMenu2')}>
                Канцелярия
              </button>
              {openSubMenus['subMenu2'] && (
                <ul className="sub-menu">
                  <li><a href="">Блокноты и тетради</a></li>
                  <li><a href="">Наклейки и стикеры</a></li>
                  <li><a href="">Подарочные пакеты и коробки</a></li>
                  <li><a href="">Канцтовары</a></li>
                  <li><a href="">Печатная продукция</a></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-button" onClick={() => toggleSubMenu('subMenu3')}>
                Игры, фильмы и аниме
              </button>
              {openSubMenus['subMenu3'] && (
                <ul className="sub-menu">
                  <li><a href="">Genshin Impact</a></li>
                  <li><a href="">Harry Potter</a></li>
                  <li><a href="">Аниме</a></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-button" onClick={() => toggleSubMenu('subMenu4')}>
                Приколы
              </button>
              {openSubMenus['subMenu4'] && (
                <ul className="sub-menu">
                  <li><a href="">Кружки</a></li>
                  <li><a href="">Коробки</a></li>
                  <li><a href="">Аудио касеты с анекдотами Романа Трахтенберга</a></li>
                  <li><a href="">Пакеты</a></li>
                  <li><a href="">Сладости</a></li>
                  <li><a href="">Открытки</a></li>
                  <li><a href="">Канцелярия</a></li>
                  <li><a href="">Антистрессы</a></li>
                  <li><a href="">стрессы</a></li>
                  <li><a href="">значки</a></li>
                  <li><a href="">обложки</a></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-button" onClick={() => toggleSubMenu('subMenu5')}>
                Косметика из азии
              </button>
              {openSubMenus['subMenu5'] && (
                <ul className="sub-menu">
                  <li><a href="">Уход</a></li>
                  <li><a href="">Приход</a></li>
                  <li><a href="">Декоративная косметика</a></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-button" onClick={() => toggleSubMenu('subMenu6')}>
                Бижутерия
              </button>
              {openSubMenus['subMenu6'] && (
                <ul className="sub-menu">
                  <li><a href="">Серьги</a></li>
                  <li><a href="">Колье и подвески</a></li>
                  <li><a href="">Кольца</a></li>
                  <li><a href="">Браслеты</a></li>
                  <li><a href="">Аксессуары</a></li>
                
                </ul>
              )}
            </li>
            </ul>
          </Scrollbar >
        </div>
      )}
    </div>
  );
}

export default Katalog;
