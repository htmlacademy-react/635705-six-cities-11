import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';
import { memo } from 'react';

type OffersListProps = {
  offersList: Hotel[];
  pageType: string;
  cityName: string;
}

function OfferNearbyList({ offersList, pageType, cityName }: OffersListProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {offersList.map((offer) => offer.city.name === cityName && (
        <PlaceCard
          key={offer.id}
          card={offer}
          pageType={pageType}
        />
      )
      )}
    </div>
  );
}

export default memo(OfferNearbyList);
