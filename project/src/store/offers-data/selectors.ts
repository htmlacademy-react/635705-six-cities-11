import { NameSpace } from '../../const';
import { Hotel } from '../../types/hotel';
import { Review } from '../../types/comments';
import { State } from '../../types/state';

const getOffer = (state: State): Hotel => state[NameSpace.Data].currentOffer as Hotel;
const getOffers = (state: State): Hotel[] => state[NameSpace.Data].offers as Hotel[];
const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].loadedState.isOffersDataLoading;
const getOffersFavotiteList = (state: State): Hotel[] => state[NameSpace.Data].favoriteOffers;
const getNearbyOffers = (state: State): Hotel[] => state[NameSpace.Data].nearbyOffers;
const getComments = (state: State): Review[] => state[NameSpace.Data].comments;
const getIsCommentLoading = (state: State): boolean => state[NameSpace.Data].loadedState.isCommentLoading;
const getIsCommentLoadSuccess = (state: State): boolean => state[NameSpace.Data].loadedState.isCommentLoadSuccess;

export { getOffer, getOffers, getOffersDataLoadingStatus, getOffersFavotiteList, getNearbyOffers, getComments, getIsCommentLoading, getIsCommentLoadSuccess };
