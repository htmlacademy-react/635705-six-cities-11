import { MAX_RATING, TypeOffersSort } from './const';
import { Hotel } from './types/hotel';

export const getRating = (rating?: number) => {
  if (rating === undefined) {
    return 0;
  }

  return (Math.round(rating) / MAX_RATING) * 100;
};

export const ucFirst = (str?: string) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};

export const getSortedOffers = (offers: Hotel[], sortType: string) => {
  const sortedOffers = offers.slice();

  switch (sortType) {
    case TypeOffersSort.Default:
      return sortedOffers;
    case TypeOffersSort.LowToHigh:
      return sortedOffers.sort((firstOffer: Hotel, secondOffer: Hotel) => firstOffer.price - secondOffer.price);
    case TypeOffersSort.HighToLow:
      return sortedOffers.sort((firstOffer: Hotel, secondOffer: Hotel) => secondOffer.price - firstOffer.price);
    case TypeOffersSort.TopRated:
      return sortedOffers.sort((firstOffer: Hotel, secondOffer: Hotel) => secondOffer.rating - firstOffer.rating);
    default:
      throw new Error('Unknown sorting type');
  }
};
