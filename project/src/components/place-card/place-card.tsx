import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import Mark from '../mark/mark';
import Bookmark from '../bookmark/bookmark';
import { Hotel } from '../../types/hotel';
import { getRating } from '../../utils';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Hotel;
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
  onMouseOver: MouseEventHandler<HTMLElement>;
}

function PlaceCard({ offer, onMouseEnter, onMouseLeave, onMouseOver }: PlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, title, price, isFavorite, rating, type } = offer;
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {isPremium && <Mark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

export default PlaceCard;
