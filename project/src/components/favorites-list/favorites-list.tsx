import LocationItem from '../location-item/location-item';
import { Hotel } from '../../types/hotel';

type FavoritesListProps = {
  favoritesOffers: Hotel[];
}

function FavoritesList({ favoritesOffers }: FavoritesListProps): JSX.Element {
  const cities = Array.from(new Set(favoritesOffers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <LocationItem
          key={city}
          city={city}
          offers={favoritesOffers.filter((offer) => offer.city.name === city)}
        />))}
    </ul>
  );
}

export default FavoritesList;
