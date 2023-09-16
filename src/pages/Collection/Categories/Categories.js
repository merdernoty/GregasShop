import React, { useState } from 'react';
import "./Categories.scss";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Boba",
    "Noodle",
    "IceCream",
    "Soda",
  ]

  const onClickCategories = (index) => {
    setActiveIndex(index);
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
        <li onClick={() => onClickCategories(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>
      ))}
      </ul>
    </div>
  );
}

export default Categories;
