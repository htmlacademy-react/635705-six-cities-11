import { useParams } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
import Inside from '../../components/inside/inside';
import OfferNearbyList from '../../components/offers-nearby-list/offers-nearby-list';
import Mark from '../../components/mark/mark';
import RatingStars from '../../components/rating-stars/ratind-stars';
import Form from '../../components/form/form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { Hotel } from '../../types/hotel';
import { ucFirst } from '../../utils';
import NotFoundPage from '../not-found-page/not-found-page';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus, MapСategory } from '../../const';
import { useMemo } from 'react';


function OfferPage(): JSX.Element {
  useScrollToTop();
  const params = useParams();
  const offersForCity = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentOffer = offersForCity.find((el) => el.id.toString() === params.id) as Hotel;
  const { id, images, city, isFavorite, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = currentOffer;
  const offersNearby = useMemo(() => offersForCity.filter((el) => el.id !== id), [id, offersForCity]);

  if (!currentOffer) {
    return <NotFoundPage />;
  }
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">

          <Gallery images={images} />

          <div className="property__container container">
            <div className="property__wrapper">

              <Mark isPremium={isPremium} className={'property__mark'} />

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>

                <Bookmark id={id} isFavorite={isFavorite} />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <RatingStars rating={rating} />
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ucFirst(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Inside goods={goods} />

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList />

                {authorizationStatus === AuthorizationStatus.Auth && <Form offerID={id} />}

              </section>
            </div>
          </div>
          <section className="property__map">
            <Map city={city} offers={offersForCity} className={MapСategory.Property} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferNearbyList
              offersList={offersNearby}
              pageType={AppRoute.Room}
              cityName={city.name}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
