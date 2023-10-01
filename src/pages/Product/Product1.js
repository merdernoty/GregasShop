// ..............
import React, { useState } from 'react';

const Product1 = () => {
  const [added, setAdded] = useState(false);

  const handleButtonClick = () => {
    if (added) {
      setAdded(false);
    } else {
      setAdded(true);
    }
  };

  return (
    <div>
      <button className="addtocart" onClick={handleButtonClick}>
        Add to Cart
      </button>
      <div className={`done ${added ? 'added' : ''}`}></div>
    </div>
  );
};

export default Product1;
// .............
