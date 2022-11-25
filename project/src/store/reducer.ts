import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { changeCity, changeSortType, loadOffers, setOffersDataLoadingStatus } from './action';
import { TypeOffersSort } from '../const';
import { Hotel } from '../types/hotel';

type InitialState = {
  city: string;
  offers: Hotel[];
  sortType: string;
  isOffersDataLoading: boolean;
};

const initialState: InitialState = {
  city: CITIES[3],
  offers: [] as Hotel[],
  sortType: TypeOffersSort.Default,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(changeSortType, (state, action) => {
      const { sortType } = action.payload;
      state.sortType = sortType;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer };
