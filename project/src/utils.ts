import dayjs from 'dayjs';
import { RaitingValues, SortType } from './const';
import { Hotel } from './types/hotel';
import { Review } from './types/comments';

export const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

export const groupBy = <T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
  array.reduce((acc, value, index, arr) => {
    (acc[predicate(value, index, arr)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });

export const convertRating = (raiting: number): number => Math.round(raiting) * RaitingValues.MaxValue / RaitingValues.MaxStars;

export const getItemsWithNoData = (itemA: number, itemB: number) => {
  if (itemA === null && itemB === null) { return 0; }
  if (itemA === null) { return 1; }
  if (itemB === null) { return -1; }
  return null;
};

export const sortHighToLow = (offerA: Hotel, offerB: Hotel) => {
  const itemsWithNoData = getItemsWithNoData(offerA.price, offerB.price);
  return itemsWithNoData ?? offerB.price - offerA.price;
};

export const sortLowToHigh = (offerA: Hotel, offerB: Hotel) => {
  const itemsWithNoData = getItemsWithNoData(offerA.price, offerB.price);
  return itemsWithNoData ?? offerA.price - offerB.price;
};

export const sortTopRated = (offerA: Hotel, offerB: Hotel) => {
  const itemsWithNoData = getItemsWithNoData(offerA.rating, offerB.rating);
  return itemsWithNoData ?? offerB.rating - offerA.rating;
};

export const getSortedOffers = (offers: Hotel[], sortType: string) => {
  let sortedOffers = offers.slice();
  switch (sortType) {
    case SortType.LowToHigh: sortedOffers = sortedOffers.sort(sortLowToHigh);
      break;
    case SortType.HighToLow: sortedOffers = sortedOffers.sort(sortHighToLow);
      break;
    case SortType.TopRated: sortedOffers = sortedOffers.sort(sortTopRated);
      break;
    default: sortedOffers = offers;
  }
  return sortedOffers;
};

export const sortReviews = (reviewA: Review, reviewB: Review) => dayjs(reviewB.date).diff(dayjs(reviewA.date));

export function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const removeOffer = (offers: Hotel[], currentOffer: Hotel) => {
  const currenIndex = offers.findIndex((offer) => offer.id === currentOffer.id);
  const currentOffers = [
    ...offers.slice(0, currenIndex),
    currentOffer,
    ...offers.slice(currenIndex + 1),
  ];

  return currentOffers;
};
