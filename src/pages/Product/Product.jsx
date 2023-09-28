import React from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const { productId, title, price, image,} = useParams();

  return (
    <div>
      <section>
        <h2>Описание продукта</h2>
        <p>
          Продукт {title} является [краткое описание продукта]. Он предназначен для [цель или назначение
          продукта].
        </p>
      </section>

      <section>
        <h2>Характеристики продукта</h2>
        <ul>
          <li>Характеристика 1: [описание]</li>
          <li>Характеристика 2: [описание]</li>
          <li>Характеристика 3: [описание]</li>
        </ul>
      </section>

      <section>
        <h2>Цена</h2>
        <p>Цена продукта: {price} рублей</p>
      </section>

      <section>
        <h2>Изображения продукта</h2>
        <img src={image} alt={`Изображение ${title}`} />
        {/* Add more images as needed */}
      </section>

      <section>
        <h2>Отзывы клиентов</h2>
      </section>
    </div>
  );
};

