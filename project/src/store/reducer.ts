import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  offers
};

const reducer = createReducer(initialState, () => { });

export { reducer };
