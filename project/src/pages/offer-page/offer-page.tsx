import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
import Inside from '../../components/inside/inside';
import PlacesList from '../../components/places-list/places-list';
import Mark from '../../components/mark/mark';
import RatingStars from '../../components/rating-stars/ratind-stars';
import Form from '../../components/favorites-list/form/form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { classNamePlacesListForProperty, MapСategory } from '../../const';
import { Hotel } from '../../types/hotel';
import { ucFirst } from '../../utils';
import { Comment } from '../../types/comment';
import { BookmarkAttributes } from '../../types/tags-attributes-types';
import NotFoundPage from '../not-found-page/not-found-page';
import { useAppSelector } from '../../hooks/index';

const bookmarkAttributesProperty: BookmarkAttributes = {
  className: 'property__bookmark-button',
  width: 31,
  height: 33,
  classNameToActiv: 'property__bookmark-button--active'
};

type OfferPageProps = {
  reviews: Comment[];
}

function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  const [selectedPoint, setSelectedPoint] = useState<Hotel>();

  const { id } = useParams();
  if (id === undefined) {
    return <NotFoundPage />;
  }

  const offer = offers.find((item) => item.id === Number(id));
  if (offer === undefined) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">

          <Gallery offer={offer} />

          <div className="property__container container">
            <div className="property__wrapper">

              <Mark isPremium={offer.isPremium} className={'property__mark'} />

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>

                <Bookmark isFavorite={offer.isFavorite} bookmarkAttributes={bookmarkAttributesProperty} />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <RatingStars rating={offer.rating} />
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ucFirst(offer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Inside offer={offer} />

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt={offer.host.name}
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <Form />
              </section>
            </div>
          </div>
          <Map city={offers[0].city} points={offers} selectedPoint={selectedPoint} className={MapСategory.Property} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={offers.filter((nearOffer) => nearOffer.city.name === offer.city.name)}
              classNameAttribute={classNamePlacesListForProperty}
              setSelectedPoint={(offerActive?: Hotel) => setSelectedPoint(offerActive)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
