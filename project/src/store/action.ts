import { createAction } from '@reduxjs/toolkit';
import { TypeOffersSort } from '../const';
import { Hotel } from '../types/hotel';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<{ city: string }>('offer/changeCity');
export const changeSortType = createAction<{ sortType: TypeOffersSort }>('offer/changeSortType');
export const loadOffers = createAction<Hotel[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
