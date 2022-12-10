import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteOfferAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type BookmarkProps = {
  id: number;
  isFavorite: boolean;
}

function Bookmark({ isFavorite, id }: BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const addFavoriteHandler = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(changeFavoriteOfferAction({ hotelId: id, isFavorite: !isFavorite }));
    }
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
