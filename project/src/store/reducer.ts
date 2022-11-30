import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES } from '../const';
import { changeCity, changeSortType, loadOffers, loadReviews, requireAuthorization, sendNewReview, setError, setOffersDataLoadingStatus } from './action';
import { TypeOffersSort } from '../const';
import { Hotel } from '../types/hotel';
import { Comment } from '../types/comment';

type InitialState = {
  city: string;
  offers: Hotel[];
  reviews: Comment[];
  sortType: string;
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  error: string | null;
};

const initialState: InitialState = {
  city: CITIES[3],
  offers: [] as Hotel[],
  reviews: [] as Comment[],
  sortType: TypeOffersSort.Default,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(sendNewReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
