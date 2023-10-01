import React from 'react';
import "./Categories.scss";

export const Categories = ({ value, onClickCategories }) => {
  const categories = [
    "Все",
    "Boba",
    "Noodle",
    "IceCream",
    "Soda",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoriesName, index) => (
          <li
            key={index}
            onClick={() => onClickCategories(index)}
            className={value === index ? 'active' : ''}
          >
            {categoriesName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;