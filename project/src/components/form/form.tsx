import { memo, useCallback } from 'react';
import { useState, FormEvent, useEffect } from 'react';
import RatingInputs from '../rating-inputs/rating-inputs';
import { useAppDispatch } from '../../hooks';
import { sendNewComment } from '../../store/api-actions';
import { RATING_STARS } from '../../const';

type FormProps = {
  offerID: number;
}

function Form({ offerID }: FormProps): JSX.Element {
  const [commentData, setCommentData] = useState({ comment: '', rating: 0 });
  const [currentChecked, setCurrentChecked] = useState<string | null>(null);
  const [disabledButton, setDisabledButton] = useState(true);

  const commentChangeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setCommentData({ ...commentData, [name]: value });
    evt.target.setAttribute('checked', 'true');
    if (name === 'rating') {
      setCurrentChecked(value);
    }
  };

  const dispatch = useAppDispatch();

  const submitHendler = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (commentData.comment.length >= 5 && commentData.comment.length <= 30 && commentData.rating !== 0) {
      dispatch(sendNewComment({
        comment: commentData.comment,
        rating: commentData.rating,
        offerID: offerID,
      }));
      setCommentData({ comment: '', rating: 0 });
      setCurrentChecked(null);
      setDisabledButton(true);
    }
  }, [commentData.comment, commentData.rating, dispatch, offerID]);

  useEffect(() => {
    if (commentData.comment.length >= 50 && commentData.comment.length <= 300 && commentData.rating !== 0) {
      setDisabledButton(false);
    }
    else {
      setDisabledButton(true);
    }
  }, [commentData.comment, commentData.rating]);

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={submitHendler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[...RATING_STARS].reverse().map((item) => (<RatingInputs key={item} item={item} currentChecked={currentChecked} commentChangeHandler={commentChangeHandler} />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={commentData.comment}
        onChange={commentChangeHandler}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabledButton}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default memo(Form);
