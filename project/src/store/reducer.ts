import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';
import { changeCity, changeSortType } from './action';
import { TypeOffersSort } from '../const';

const initialState = {
  city: CITIES[3],
  offers,
  sortType: TypeOffersSort.Default
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
    });
});

export { reducer };
