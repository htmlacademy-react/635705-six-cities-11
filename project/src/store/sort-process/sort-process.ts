import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOffers } from '../../types/state';
import { NameSpace, TypeOffersSort } from '../../const';

const initialState: SortOffers = {
  sortType: TypeOffersSort.Default,
  sortView: 'closed',
};


export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    sortOffersType: (state, action: PayloadAction<{ currentType: string }>) => {
      state.sortType = action.payload.currentType;
    },
    sortMenuView: (state) => {
      state.sortView = state.sortView === 'closed' ? 'opened' : 'closed';
    },
    resetSort: (state) => {
      state.sortView = 'closed';
      state.sortType = TypeOffersSort.Default;
    },
  },
});

export const { sortOffersType, sortMenuView, resetSort } = sortProcess.actions;
