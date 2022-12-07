import { memo } from 'react';

type RatingInputsProps = {
  item: string;
  currentChecked: string | null;
  commentChangeHandler: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function RatingInputs({ item, currentChecked, commentChangeHandler }: RatingInputsProps): JSX.Element {

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={item}
        id={`${item}-stars`}
        type="radio"
        onChange={commentChangeHandler}
        checked={currentChecked === item}
      />
      <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default memo(RatingInputs);
