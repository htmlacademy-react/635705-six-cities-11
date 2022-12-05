import { AppRoute } from '../../const';
import { Hotel } from '../../types/hotel';
import PlaceCard from '../place-card/place-card';

export type LocationItemProps = {
  city: string;
  offersFavorList: Hotel[];
}

function LocationItem({ city, offersFavorList }: LocationItemProps): JSX.Element {
  return (
    <li key={city} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersFavorList.filter((offer) => offer.city.name === city)
          .map((offer) => (
            <PlaceCard
              key={offer.id}
              card={offer}
              pageType={AppRoute.Favorites}
            />))}
      </div>
    </li>
  );
}

export default LocationItem;
