import React from 'react';
import { Comment } from '../../types/comment';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Comment[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length.toString()}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={`${review.id}`} review={review}/>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
