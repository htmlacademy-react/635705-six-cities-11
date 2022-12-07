import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import CitiesPlacesEmpty from '../../components/cities-places-empty/cities-places-empty';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import { Hotel } from '../../types/hotel';
import { useAppSelector } from '../../hooks';
import { getOffers, getSelectedCityName, getSelectedPoint } from '../../store/offers-data/selectors';
import { getAllOffers } from '../../store/offers-data/selectors';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Tabs from '../../components/tabs/tabs';
import { AppRoute, MapСategory } from '../../const';

function MainPage(): JSX.Element {
  useScrollToTop();
  const allOffers: Hotel[] = useAppSelector(getAllOffers);
  const currentCity = useAppSelector(getSelectedCityName);
  const offersForCity = useAppSelector(getOffers);
  const selectedPoint = useAppSelector(getSelectedPoint);

  const offersForCurrentCity = allOffers.filter((offer) => offer.city.name === currentCity);
  const offersCountForCity = offersForCurrentCity ? offersForCurrentCity.length : 0;

  if (!allOffers) {
    return <CitiesPlacesEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offersCountForCity === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cityName={currentCity} />
        <div className="cities">
          <div className={`cities__places-container ${offersCountForCity === 0 ? 'cities__places-container--empty' : ''} container`}>
            {offersCountForCity !== 0
              ? (
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersForCity.length} places to stay in {currentCity}</b>
                  <PlacesSorting />
                  <PlacesList
                    pageType={AppRoute.Main}
                  />
                </section>)
              : <CitiesPlacesEmpty />}
            <div className="cities__right-section">
              {offersCountForCity !== 0 && (
                <Map
                  city={offersForCity[0].city}
                  offers={offersForCity}
                  selectedPoint={selectedPoint}
                  className={MapСategory.Cities}
                />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
