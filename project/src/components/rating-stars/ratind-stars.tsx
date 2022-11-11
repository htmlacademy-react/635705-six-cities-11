import React from 'react';
import { getRating } from '../../utils';

type RatingStartProps = {
  rating: number;
}

function RatingStars({rating}: RatingStartProps): JSX.Element {
  return (
    <>
      <span style={{ width: `${getRating(rating)}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </>
  );
}

export default RatingStars;
