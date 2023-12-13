import React from 'react';
import './NewsWall.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../../../redux/slices/newsSlice';

export const NewsWall = () => {
  const news = useSelector((state) => state.newsSlice.news)
  const statusHit = useSelector((state) => state.newsSlice.status.all);
  const dispatch = useDispatch();

  const fetchProducts = async () => {



    dispatch(
      fetchNews({

        itemCategory: 'all', // Используйте 'new' для New компонента
      })
    );
  };
  React.useEffect(() => {

      fetchProducts();
    },
    []);


  return (
<div className="CenteredNewsWall">
  <div className="HitNewsWall">
    <div className="NewsWallText">News:</div>
    <div className="NewsWallPhotos">
      {news.map((obj) => (
        <div className="data-container">
          <a href="/home">
            <div className="image-containerNewsWallOne">
              <img src={obj.imgUrl} alt={`News `} />
              <div className="Date">31.01.2002</div>
              <p>{obj.title}</p>
            </div>
          </a>
        </div>
      ))}
    </div>

  </div>
</div>
  );
};

export default NewsWall;