import { Link } from 'react-router-dom';
import PlacesList from '../places-list/places-list';
import { Hotel } from '../../types/hotel';
import { PageType, AppRoute } from '../../const';

type FavoritesListProps = {
  offers: Hotel[];
  city: string;
}

function FavoritesList({ offers, city }: FavoritesListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlacesList offers={offers} pageType={PageType.Favorite} />
      </div>
    </li>
  );
}

export default FavoritesList;
