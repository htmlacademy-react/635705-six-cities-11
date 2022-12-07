import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { Hotel } from '../../types/hotel';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  allOffers: [],
  isOffersDataLoading: false,
  hasError: false,

  selectedCityName: 'Paris',
  offers: [],
  offersNotSort: [],
  selectedPoint: null,
  offersFavotiteList: [],
};


export const offersData = createSlice({
  name: NameSpace.DataOffers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ currentCity: string }>) => {
      state.selectedCityName = action.payload.currentCity;
      state.offers = state.allOffers.filter((el) => el.city.name === action.payload.currentCity);
    },
    getCurrentPoint: (state, action: PayloadAction<{ offer: Hotel; isAction: boolean }>) => {
      const { offer, isAction } = action.payload;
      state.selectedPoint = isAction ? offer.location : null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.offers = state.allOffers.filter((el) => el.city.name === state.selectedCityName);
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});

export const { changeCity, getCurrentPoint } = offersData.actions;
