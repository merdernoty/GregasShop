import React from 'react';
import './ItemBlock.scss';
import { Link } from 'react-router-dom'; // Добавлен импорт Link


export const ItemBlock = ({ title, price, image, rating, id }) => {
  return (
    <div className="ItemBlock">
      <Link to={`/product/${id}/${encodeURIComponent(title)}/${price}/${encodeURIComponent(image)}/${id}`}>
        <div className="NewPhotos">
          <div className="Item-container">
            <div className="image-container">
              <img key={image} src={image} alt="Product 1" />
            </div>
            <p className="ItemBlockParag">
              <a key={title} href="/home/" className="link">
                {title}
              </a>
              <a href="/home/"></a>
              <p className="Stock">
                В Наличии &#10004; 1<p className="Sold"> Продано За Месяц &#10004; <b className='Rating'>{rating}</b></p>
                <p key={price}className="Price">Цена: {price}</p>
              </p>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
