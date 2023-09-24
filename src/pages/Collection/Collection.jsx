import React from 'react';
import Categories from './Categories/Categories';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss'; // Импортируйте файл стилей для коллекции
import Sort from './Sort/Sort';
import Skeleton from './Skeleton/Skeleton';

export const Collection = () => {
  const [Items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://650c60bf47af3fd22f678d4b.mockapi.io/items')
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="collection-container">
      <Categories />
      <Sort></Sort>
      <div className="product-list">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>)
          : Items.map((obj) => (
              <ItemBlock key={obj.id} title={obj.title} price={obj.price} image={obj.image}></ItemBlock>
            ))}
      </div>
    </div>
  );
};
