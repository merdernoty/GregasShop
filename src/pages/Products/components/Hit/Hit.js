import React  from 'react';
import './Hit.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../../redux/slices/itemSlice';
import { ItemBlock } from '../ItemBlock/ItemBlock';

export const Hit = () => {
  const itemsHit = useSelector((state) => state.itemSlice.itemsHit);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
  
    const categoryId = 1;
    const currentPage = 1;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    

    dispatch(
      fetchItems({
        category,
        currentPage,
        itemCategory: 'hit', // Используйте 'new' для New компонента
      })
    );
  };
  React.useEffect(() => {
    
      fetchProducts();
    },
    []);
  

  const products = itemsHit.map((obj) => <ItemBlock key={obj.id} {...obj}></ItemBlock>);

  return (
    <div className="HitSlider">
      <p className="HitSliderText"> Хиты </p>
      <div className="HitPhotos">
        {products}
      </div>
    </div>
  );
};