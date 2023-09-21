import React from 'react';
import Categories from './Categories/Categories';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss'; // Импортируйте файл стилей для коллекции
import Sort from './Sort/Sort';

export const Collection = () => {
  const [Items, setItems] = React.useState([])
  fetch('https://650c60bf47af3fd22f678d4b.mockapi.io/items')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setItems(json)
    });

  return (
    <div className="collection-container">
      <Categories />
      <Sort></Sort>
      <div className="product-list">
        {Items.map((obj) => (
          <ItemBlock key={obj.id} title={obj.title} price={obj.price} image={obj.image} /> //  or {...obj}
        ))}
      </div>
    </div>
  );
};
