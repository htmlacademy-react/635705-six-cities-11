import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';
import { Hotel } from '../../types/hotel';

type PlacesListProps = {
  offers: Hotel[];
}

function PlacesList({ offers }: PlacesListProps): JSX.Element {

  const [, setActiveCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={`${offer.id}`}
          onMouseEnter={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(0)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
