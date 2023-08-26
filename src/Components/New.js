
import React from "react";
import "./New.scss";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import photo4 from "../img/photo4.jpg";

function New() {
  return (

   <div className="NewSlider"> <p className="NewSliderText"> Новинки </p>
    <div className="NewPhotos">

      <div className="Container">
        <div className="image-container">
        <a href="/home">
          <img src={photo1} />
          <div class="shine-effect"></div>
        </a>
        </div>
        <p className="Boba">
          <a href="/home/" className="link"> Boba </a>
          <a href="/home/"></a>
          <p className="BobaStock">
            {" "}
            В Наличии &#10004; 1<p className="BobaSold"> Продано За Месяц &#10004; 1</p>
            <p className="BobaPrice">
              1 ₽
            </p>
          </p>
        </p>
        <div class="expand-details">
    <a href="/home" class="details-button">Details</a>
    </div>
      </div>
      
      <div className="Container">
      <div className="image-container">
        <a href="/home">
          <img src={photo2} />
        </a>
        </div>
        <p className="Noodle">
        <a href="/home/" className="link"> Noodle </a>
          <p className="NoodleStock">
            {" "}
            В Наличии &#10004; 1<p className="NoodleSold"> Продано За Месяц &#10004; 1</p>
            <p className="NoodlePrice">
              1 ₽
            </p>
          </p>
        </p>
        <div class="expand-details">
    <a href="/home" class="details-button">Details</a>
    </div>
      </div>
      
      <div className="Container">
      <div className="image-container">
        <a href="/home">
          <img src={photo3} />
        </a>
        </div>
        <p className="IceCream">
        <a href="/home/" className="link"> Ice Cream </a>
          <p className="IceCreamStock">
            {" "}
            В Наличии &#10004; 1 <p className="IceCreamSold"> Продано За Месяц &#10004; 1</p>
            <p className="IceCreamPrice">
              1 ₽
            </p>
          </p>
        </p>
        <div class="expand-details">
    <a href="/home" class="details-button">Details</a>
    </div>
      </div>
      
      <div className="Container">
      <div className="image-container">
        <a href="/home">
          <img src={photo4} />
        </a>
        </div>
        <p className="Soda">
        <a href="/home/" className="link"> Soda </a>
          <p className="SodaStock">
            {" "}
            В Наличии &#10004; 1<p className="SodaSold">Продано За Месяц &#10004; 1</p>
            <p className="SodaPrice">
              1 ₽
            </p>
          </p>
        </p>
        <div class="expand-details">
    <a href="/home" class="details-button">Details</a>
    </div>
      </div>
    </div>
  </div>
  );
}

export default New;
