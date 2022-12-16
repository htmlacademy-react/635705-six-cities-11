import { memo, useMemo } from 'react';
import { Hotel } from '../../types/hotel';
import { getSortedOffers } from '../../utils';
import Card from '../card/card';

type PlacesListProps = {
  offers: Hotel[];
  activeSortItem?: string;
  pageType: string;
  setActiveCard?: ((offer: Hotel | undefined) => void) | undefined;
}

function PlacesList({ offers, activeSortItem, pageType, setActiveCard }: PlacesListProps): JSX.Element {
  const sortedOffers = useMemo(() => getSortedOffers(offers, activeSortItem || ''), [offers, activeSortItem]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer: Hotel) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} pageType={pageType} />)}
    </div>
  );
}

export default memo(PlacesList);
