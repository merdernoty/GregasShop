import React from 'react';
import Categories from './Categories/Categories';
import Item from '../../assets/ProductJSON/Product.json';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss'; // Импортируйте файл стилей для коллекции
import Sort from './Sort/Sort';

export const Collection = () => {
  return (
    <div className="collection-container">
      <Categories />
      <Sort></Sort>
      <div className="product-list">
        {Item.map((obj) => (
          <ItemBlock key={obj.id} title={obj.title} price={obj.price} image={obj.image} /> //  or {...obj}
        ))}
      </div>
    </div>
  );
};
