import { memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeFavoriteOfferAction } from '../../store/api-actions';

type BookmarkProps = {
  id: number;
  isFavorite: boolean;
}

function Bookmark({ isFavorite, id }: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();

  const addFavoriteHandler = () => {
    dispatch(changeFavoriteOfferAction({ hotelId: id, isFavorite: !isFavorite }));
  };

  return (
    <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={addFavoriteHandler}>
      <svg className="place-card__bookmark-icon " width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
      </span>
    </button>
  );
}

export default memo(Bookmark);
