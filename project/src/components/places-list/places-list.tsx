import { PlaceCardAttributes } from '../../types/tags-attributes-types';
import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';

const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'cities__card',
  imageWrapper: 'cities__image-wrapper',
  cardInfo: '',
  imgWidth: 260,
  imgHeight: 200
};

type PlacesListProps = {
  offers: Hotel[];
  classNameAttribute: string;
  setSelectedPoint: (id?: Hotel) => void;
}

function PlacesList({ offers, classNameAttribute, setSelectedPoint }: PlacesListProps): JSX.Element {
  return (
    <div className={classNameAttribute}>
      {offers.map((offer, index) => (
        <PlaceCard
          offer={offer}
          key={`${offer.id}-${index}`}
          onMouseMove={() => setSelectedPoint(offer)}
          onMouseOut={() => setSelectedPoint(undefined)}
          placeCardAttributes={PlaceCardFavorites}
        />
      ))}
    </div>
  );
}

export default PlacesList;
