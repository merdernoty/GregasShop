import React from 'react';
import './ItemBlock.scss';
import { Link } from 'react-router-dom'; // Добавлен импорт Link

export const ItemBlock = ({ title, price, imageURL }) => {
  return (
    <div className="ItemBlock">
      <Link to="/product/1">
        <div className="NewPhotos">
          <div className="Item-container">
            <div className="image-container">
              <img src={imageURL} alt="Product 1" />
            </div>
            <p className="ItemBlockParag">
              <a href="/home/" className="link">
                {title}
              </a>
              <a href="/home/"></a>
              <p className="Stock">
                В Наличии &#10004; 1<p className="Sold"> Продано За Месяц &#10004; 1</p>
                <p className="Price">{price}</p>
              </p>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
