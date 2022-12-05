import LocationItem from '../location-item/location-item';
import { Hotel } from '../../types/hotel';

type OffersListProps = {
  offersFavorList: Hotel[];
}

function FavoritesList({ offersFavorList }: OffersListProps): JSX.Element {

  const cities = Array.from(new Set(offersFavorList.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <LocationItem
          key={city}
          city={city}
          offersFavorList={offersFavorList}
        />))}
    </ul>
  );
}

export default FavoritesList;
