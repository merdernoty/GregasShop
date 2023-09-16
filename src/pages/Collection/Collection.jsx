import React from 'react';
import Categories from './Categories/Categories';
import Item from "../../assets/ProductJSON/Product.json"
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss'; // Импортируйте файл стилей для коллекции

console.log(Item)

export const Collection = () => {
  return (
    <div className="collection-container">
      <Categories />
      <div className="product-list">
        {Item.map((obj) => (
          <ItemBlock title={obj.title} price={obj.price} image={obj.imageURL} key={obj.id} />//  or {...obj}
        ))}
      </div>
    </div>
  );
};
