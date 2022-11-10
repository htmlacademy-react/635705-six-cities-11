import { Hotel } from '../../types/hotel';
import { PlaceCardAttributes } from '../../types/tags-attributes-types';
import PlaceCard from '../place-card/place-card';

export const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'favorites__card',
  imageWrapper: 'favorites__image-wrapper',
  cardInfo: 'favorites__card-info',
  imgWidth: 150,
  imgHeight: 110
};

export type LocationItemProps = {
  city: string;
  offers: Hotel[];
}

function LocationItem({ city, offers }: LocationItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={`${offer.id}-${offer.title}`.toString()}
            placeCardAttributes={PlaceCardFavorites}
          />
        ))}
      </div>
    </li>
  );
}

export default LocationItem;
