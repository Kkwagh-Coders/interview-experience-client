import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './StarRating.module.css';

function StarRating() {
  const [rating, setRating] = useState(0);
  console.log(rating);
  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => {
    console.log('Enter');
  };
  const onPointerLeave = () => {
    console.log('Leave');
  };
  const onPointerMove = (value: number, index: number) => {
    console.log(value, index);
  };

  return (
    <div className={styles.StarRating}>
      <div className={styles.App}>
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          /* Available Props */
        />
      </div>
    </div>
  );
}
export default StarRating;
