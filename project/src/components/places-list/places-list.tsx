import { MouseEvent, useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';
import { Hotel } from '../../types/hotel';

type PlacesListProps = {
  offers: Hotel[];
  onListItemHover: (listItemName: string) => void;
}

function PlacesList({ offers, onListItemHover }: PlacesListProps): JSX.Element {
  const listItemHoverHandler = (evt: MouseEvent<HTMLElement>) => {
    onListItemHover(evt.target.city.name as string);
  };

  const [, setActiveCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={`${offer.id}`}
          onMouseEnter={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(0)}
          onMouseOver={listItemHoverHandler}
        />
      ))}
    </div>
  );
}

export default PlacesList;
