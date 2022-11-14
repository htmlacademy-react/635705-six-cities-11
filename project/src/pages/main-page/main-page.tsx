import { useState } from 'react';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import { Hotel } from '../../types/hotel';
import Header from '../../components/header/header';
import { classNamePlacesListForMain, MapСategory } from '../../const';
import PlacesSorting from '../../components/places-sorting/places-sorting';

type MainPageProps = {
  offers: Hotel[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Hotel>();
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="/#">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <PlacesSorting />
              <PlacesList
                offers={offers}
                classNameAttribute={classNamePlacesListForMain}
                setSelectedPoint={setSelectedPoint}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={offers[0].city}
                points={offers}
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
