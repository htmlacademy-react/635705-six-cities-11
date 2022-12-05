import { useState, useEffect } from 'react';
import PlaceCard from '../place-card/place-card';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';
import { TypeOffersSort } from '../../const';
import { getSortType } from '../../store/sort-process/selectors';
import _ from 'lodash';

type OffersListProps = {
  pageType: string;
}

function OffersList({ pageType }: OffersListProps): JSX.Element {

  const offersNotSort = useAppSelector(getOffers);
  const currentSortType = useAppSelector(getSortType);
  const [offerSort, setOfferSort] = useState(offersNotSort);

  useEffect(() => {
    switch (currentSortType) {
      case TypeOffersSort.Default:
        setOfferSort(offersNotSort);
        break;
      case TypeOffersSort.HighToLow:
        setOfferSort(_.sortBy(offersNotSort, 'price').reverse());
        break;
      case TypeOffersSort.LowToHigh:
        setOfferSort(_.sortBy(offersNotSort, 'price'));
        break;
      case TypeOffersSort.TopRated:
        setOfferSort(_.sortBy(offersNotSort, 'rating').reverse());
        break;
    }
  }, [currentSortType, offersNotSort]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerSort.map((offer) => (
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

export default OffersList;
