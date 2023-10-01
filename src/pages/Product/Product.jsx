import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';
import './Product1.js';

export const Product = () => {
  const { productId, title, price, image, id } = useParams();

  return (
    <div>
      <h3 className="TitleBox"> {title} </h3>
      <div className="ProductBox">
        <br></br>
        <section>
          <img className="ProductImage" src={image} alt={`Изображение ${title}`} />
          {/* Add more images as needed */}
        </section>
        <section>
          <p className="PriceTag1"> цена {price} </p>
          <p className="PriceTag2"> РРЦ XX </p>
        </section>
        <br></br>
        <section>
          <div className="ProductDetails">
            <p>В наличии 368 </p>
            <p>Продано за месяц 398 </p>
            <p>Минимальная сумма заказа 9 999</p>
          </div>
        </section>
        <div className="Sales">
          <section>
            <p> Скидка от 50 000 - 3% </p>
            <p> Скидка от 100 000 - 5% </p>
            <p> Скидка от 200 000 - 10% </p>
          </section>
          <br></br>
          <section>
            <p> Доставка в город Махачкала от Х дней</p>
          </section>
          <br></br>
          <br></br>
          {/* ...... */}
          <div>
            <button class="addtocart">
              <div class="pretext">
                <i class="fas fa-cart-plus"></i> ADD TO CART
              </div>

              <div class="pretext done">
                <div class="posttext">
                  <i class="fas fa-check"></i> ADDED
                </div>
              </div>
            </button>
          </div>
          {/* ...... */}
        </div>
      </div>
    </div>
  );
};
