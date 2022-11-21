import { useState } from 'react';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import { Hotel } from '../../types/hotel';
import Header from '../../components/header/header';
import { classNamePlacesListForMain, MapСategory } from '../../const';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { useAppSelector } from '../../hooks/index';
import Tabs from '../../components/tabs/tabs';
import { getSortedOffers } from '../../utils';

function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Hotel>();
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const cityOffers = offers.filter((offer) => offer.city.name === currentCity);
  const sortType = useAppSelector((state) => state.sortType);
  const sortedOffers = getSortedOffers(cityOffers, sortType);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
              <PlacesSorting />
              <PlacesList
                offers={sortedOffers}
                classNameAttribute={classNamePlacesListForMain}
                setSelectedPoint={setSelectedPoint}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={cityOffers[0].city}
                points={cityOffers}
                selectedPoint={selectedPoint}
                className={MapСategory.Cities}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
