import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getOffersFavotiteList } from '../../store/offers-data/selectors';
import { groupBy } from '../../utils';
import Header from '../../components/header/header';
import FavoritesList from '../../components/favorites-list/favorites-list';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';

function FavoritesPage(): JSX.Element {
  useScrollToTop();
  const dispatch = useAppDispatch();
  const [isFavoritesLoaded, setFavoritesLoaded] = useState<boolean>(false);
  const offersFavorList = useAppSelector(getOffersFavotiteList);
  const favoritesGroups = groupBy(offersFavorList, (i) => i.city.name);
  const isEmpty = offersFavorList.length === 0;

  useEffect(() => {
    if (isFavoritesLoaded) { return; }
    dispatch(fetchFavoriteOffersAction());
    setFavoritesLoaded(true);
  }, [dispatch, isFavoritesLoaded]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{isEmpty ? 'There are no saved listing' : 'Saved listing'}</h1>
            <ul className="favorites__list">
              {!isEmpty ? Object.entries(favoritesGroups).map((item) => {
                const cityName = item[0];
                const cityOffers = item[1];
                return <FavoritesList key={cityName} city={cityName} offers={cityOffers} />;
              }) : ''}
            </ul>
          </section>
        </div>
      </main>
      <Footer isContainer={!isEmpty} />
    </div>
  );
}
export default FavoritesPage;
