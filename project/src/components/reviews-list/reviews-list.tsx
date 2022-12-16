import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction } from '../../store/api-actions';
import { getComments } from '../../store/offers-data/selectors';
import { MAX_REVIEWS_COUNT } from '../../const';
import { sortReviews } from '../../utils';
import ReviewItem from '../../components/review-item/review-item';

type ReviewsListProps = {
  id: number;
}

function ReviewsList({ id }: ReviewsListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getComments);
  const sortedReviews = reviews.slice().sort(sortReviews);

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.slice(0, MAX_REVIEWS_COUNT).map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}

export default ReviewsList;
