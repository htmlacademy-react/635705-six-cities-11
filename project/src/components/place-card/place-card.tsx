
import { useState, useEffect, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import Bookmark from '../bookmark/bookmark';
import Mark from '../mark/mark';
import RatingStars from '../rating-stars/ratind-stars';
import { Hotel } from '../../types/hotel';
import { ucFirst } from '../../utils';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { getCurrentPoint } from '../../store/offers-data/offers-data';

type PlaceCardProps = {
  card: Hotel;
  pageType: string;
};

function PlaceCard({ card, pageType }: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { isPremium, isFavorite, previewImage, price, rating, type, id, title } = card;

  const [settingPage, setSettingPage] = useState({
    widthImg: '260',
    heightImg: '200',
    className: ''
  });

  useEffect(() => {
    switch (pageType) {
      case AppRoute.Main:
        setSettingPage({
          widthImg: '260',
          heightImg: '200',
          className: 'cities'
        });
        break;
      case AppRoute.Favorites:
        setSettingPage({
          widthImg: '150',
          heightImg: '110',
          className: 'favorites'
        });
        break;
      case AppRoute.Room:
        setSettingPage({
          widthImg: '260',
          heightImg: '200',
          className: 'near-places'
        });
        break;
    }
  }, [pageType]);

  const mouseEnterHandler = useCallback(() => dispatch(getCurrentPoint({ offer: card, isAction: true })), [card, dispatch]);
  const mouseLeaveHandler = useCallback(() => dispatch(getCurrentPoint({ offer: card, isAction: false })), [card, dispatch]);
  const mouseClickHandler = useCallback(() => dispatch(getCurrentPoint({ offer: card, isAction: false })), [card, dispatch]);

  return (
    <article
      className={`${settingPage.className}__card place-card`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Mark isPremium={isPremium} className={'place-card__mark'} />
      <div
        className={`${settingPage.className}__image-wrapper place-card__image-wrapper`}
      >
        <a href="/">
          <img className="place-card__image" src={previewImage} width={settingPage.widthImg} height={settingPage.heightImg} alt="Place" />
        </a>
      </div>
      <div className={`${settingPage.className === 'favorites' ? 'favorites__card-info ' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RatingStars rating={rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={generatePath(`${AppRoute.Room}/:id`, { id: id.toString() })}
            onClick={mouseClickHandler}
          >{title}
          </Link>
        </h2>
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article >
  );
}

export default memo(PlaceCard);
