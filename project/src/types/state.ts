import { store } from '../store/index.js';
import { Hotel } from './hotel.js';
import { Review } from './comments.js';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataProcess = {
  currentOffer: Hotel | undefined;
  offers: Hotel[] | undefined;
  favoriteOffers: Hotel[];
  nearbyOffers: Hotel[];
  comments: Review[];
  loadedState: {
    isCurrentOfferLoading: boolean;
    isOffersDataLoading: boolean;
    isOffersLoaded: boolean;
    isFavoritesLoaded: boolean;
    isNearbyLoaded: boolean;
    isCommentLoading: boolean;
    isCommentLoadSuccess: boolean;
  };
};

export type AppActionData = {
  city: string;
};
