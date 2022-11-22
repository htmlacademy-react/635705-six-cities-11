import { createAction } from '@reduxjs/toolkit';
import { TypeOffersSort } from '../const';

export const changeCity = createAction<{ city: string }>('offer/changeCity');
export const changeSortType = createAction<{ sortType: TypeOffersSort }>('offer/changeSortType');
