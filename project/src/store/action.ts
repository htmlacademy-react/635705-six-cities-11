import { createAction } from '@reduxjs/toolkit';
import { TypeOffersSort } from '../const';
import { Hotel } from '../types/hotel';
import { Comment } from '../types/comment';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<{ city: string }>('offer/changeCity');
export const changeSortType = createAction<{ sortType: TypeOffersSort }>('offer/changeSortType');
export const loadOffers = createAction<Hotel[]>('data/loadOffers');
export const loadReviews = createAction<Comment[]>('data/loadReviews');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('data/setError');
