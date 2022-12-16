import { createAction } from '@reduxjs/toolkit';
import { Hotel } from '../types/hotel';
import { Review } from '../types/comments';
import { AppRoute } from '../const';

const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

const selectCity = createAction<string>('main/selectCity');

const updateOffers = createAction<Hotel>('main/updateOffers');

const updateFavoriteOffers = createAction<Hotel>('favorite/updateFavoriteOffers');

const updateNearbyOffers = createAction<Hotel>('room/updateNearbyOffers');

const updateCurrentOffer = createAction<Hotel>('room/updateCurrentOffer');

const updateComments = createAction<Review[]>('room/updateComments');

export { selectCity, redirectToRoute, updateOffers, updateFavoriteOffers, updateNearbyOffers, updateCurrentOffer, updateComments };
