import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { sendNewReviewAction } from '../../store/api-actions';
import { ReviewData } from '../../types/review-data';
import { MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH } from '../../const';

type FormProps = {
  offerID: number;
}

function Form({ offerID }: FormProps): JSX.Element {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendNewReviewAction(reviewData));
  };

  const isFormValid = formData.rating !== 0 && formData.review.length > MIN_REVIEW_LENGTH && formData.review.length < MAX_REVIEW_LENGTH;

  const reviewFormSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    isFormValid && onSubmit({
      id: offerID,
      comment: formData.review,
      rating: formData.rating,
    });

    setFormData({ ...formData, review: '', rating: 0 });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={reviewFormSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandle}
        value={formData.review}
        maxLength={MAX_REVIEW_LENGTH}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid} >Submit</button>
      </div>
    </form>
  );
}

export default Form;
