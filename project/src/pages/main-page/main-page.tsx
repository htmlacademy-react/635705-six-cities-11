import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import CitiesPlacesEmpty from '../../components/cities-places-empty/cities-places-empty';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import { Hotel } from '../../types/hotel';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useState, useCallback, useMemo } from 'react';
import { PageType, SortType } from '../../const';
import { getCity } from '../../store/app-action-process/selectors';
import { getOffers } from '../../store/offers-data/selectors';
import { selectCity } from '../../store/action';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Tabs from '../../components/tabs/tabs';

function MainPage(): JSX.Element {
  useScrollToTop();
  const offers = useAppSelector(getOffers);
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Hotel | undefined>(undefined);
  const [activeSortItem, setActiveSortItem] = useState<string>(SortType.Popular);
  const currentCity = useAppSelector(getCity);
  const currentOffers = useMemo(() => offers.filter((offer) => offer.city.name === currentCity), [offers, currentCity]);
  const isEmpty = currentOffers.length === 0;

  const setCity = useCallback((cityItem: string) => dispatch(selectCity(cityItem)), [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs selectedCity={currentCity} setCity={setCity} />
        <div className="cities">
          {
            isEmpty ? < CitiesPlacesEmpty city={currentCity} /> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
                  <PlacesSorting activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} />
                  <PlacesList
                    offers={currentOffers}
                    activeSortItem={activeSortItem}
                    setActiveCard={setActiveCard}
                    pageType={PageType.Main}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {currentOffers[0].city && (
                      <Map
                        city={currentOffers[0].city}
                        offers={currentOffers}
                        activeCard={activeCard}
                      />
                    )}
                  </section>
                </div>
              </div>
          }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
