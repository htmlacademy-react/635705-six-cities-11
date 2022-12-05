import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';

type OffersListProps = {
  offersList: Hotel[];
  pageType: string;
  cityName: string;
}

function OfferNearbyList({ offersList, pageType, cityName }: OffersListProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {offersList.filter((offer) => offer.city.name === cityName).map((offer) => (
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

export default OfferNearbyList;
