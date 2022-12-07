import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Hotel, LocationType } from '../../types/hotel';
import { createSelector } from '@reduxjs/toolkit';

export const getAllOffers = (state: State): Hotel[] => state[NameSpace.DataOffers].allOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.DataOffers].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.DataOffers].hasError;

export const getSelectedCityName = (state: State): string => state[NameSpace.DataOffers].selectedCityName;
export const getOffers = (state: State): Hotel[] => state[NameSpace.DataOffers].offers;
export const getSelectedPoint = (state: State): LocationType | null => state[NameSpace.DataOffers].selectedPoint;


export const getOffersFavotiteList = createSelector(
  [getAllOffers],
  (allOffers) => allOffers.filter((offer) => offer.isFavorite)
);
