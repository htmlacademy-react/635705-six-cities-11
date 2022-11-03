import Mark from '../mark/mark';
import Bookmark from '../bookmark/bookmark';
import { Hotel } from '../../types/hotel';
import { getRating } from '../../utils';

type FavoritesCardProps = {
  offer: Hotel;
}

function FavoritesCard({ offer }: FavoritesCardProps): JSX.Element {
  const { isPremium, previewImage, title, price, isFavorite, rating, type } = offer;

  return (
    <article className="favorites__card place-card">
      {isPremium && <Mark />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
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
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
