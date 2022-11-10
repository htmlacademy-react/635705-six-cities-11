import React from 'react';
import { getRating } from '../../utils';

type RatingStartProps = {
  rating: number;
}

function RatingStars({rating}: RatingStartProps): JSX.Element {
  return (
    <React.Fragment>
      <span style={{ width: `${getRating(rating)}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </React.Fragment>
  );
}

export default RatingStars;
