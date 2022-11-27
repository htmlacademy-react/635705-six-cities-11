import { PlaceCardAttributes } from '../src/types/tags-attributes-types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer'
}

export const MAX_RATING = 5;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapСategory {
  Property = 'property__map',
  Cities = 'cities__map',
}

export const IconParameter = {
  Size: {
    x: 27,
    y: 39
  },
  Anchor: {
    x: 13.5,
    y: 39
  },
  Url: {
    Default: 'img/pin.svg',
    Current: 'img/pin-active.svg'
  }
} as const;

export const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'cities__card',
  imageWrapper: 'cities__image-wrapper',
  cardInfo: '',
  imgWidth: 260,
  imgHeight: 200
};

export enum TypeOffersSort {
  Default = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const classNamePlacesListForMain = 'cities__places-list places__list tabs__content';

export const classNamePlacesListForProperty = 'near-places__list places__list';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Offers = '/hotels',
  Nearby = '/nearby',
  Favorites = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}
