import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Hotel, LocationType } from './hotel';
import { CommentType } from '../types/comments';
import { UserData } from '../types/user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authInfo: UserData | null;
};

export type OffersData = {
  allOffers: Hotel[];
  isOffersDataLoading: boolean;
  hasError: boolean;

  selectedCityName: string;
  offers: Hotel[];
  offersNotSort: Hotel[];
  selectedPoint: LocationType | null;
  offersFavotiteList: Hotel[];
};

export type CommentsData = {
  comments: CommentType[];
  isCommentsLoading: boolean;
  hasErrorComments: boolean;
};

export type SortOffers = {
  sortType: string;
  sortView: string;
};
export type OffersForCity = {
  selectedCityName: string;
  offers: Hotel[];
  offersNotSort: Hotel[];
  selectedPoint: LocationType | null;
  offersFavotiteList: Hotel[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
