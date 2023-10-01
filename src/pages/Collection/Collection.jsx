import React from 'react';
import Categories from './Categories/Categories';
import { ItemBlock } from '../Products/components/ItemBlock/ItemBlock';
import './Collection.scss'; // Импортируйте файл стилей для коллекции
import Sort from './Sort/Sort';
import Skeleton from './Skeleton/Skeleton';
import { useSearch } from '../../hooks/context/SearchContext';

export const Collection = () => {
  const [Items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = useSearch();
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSortsort] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const SortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://650c60bf47af3fd22f678d4b.mockapi.io/items?${category}&sortBy=${SortBy}&order=${order}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryId, sort]);

  const Skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const products = Items.filter((obj) => {
     if (obj.title.includes(searchValue)) {
      return true;
    }
    return false;
  }).map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="collection-container">
      <Categories value={categoryId} onClickCategories={(index) => setCategoryId(index)} />
      <Sort value={sort} onChangeSort={(index) => setSortsort(index)}></Sort>
      <div className="product-list">{isLoading ? Skeletons : products}</div>
    </div>
  );
};
