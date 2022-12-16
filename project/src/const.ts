export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PageType {
  Main = 'cities',
  Favorite = 'favorites',
  Room = 'near-places'
}

export enum MapIconSize {
  Width = 27,
  Height = 39
}

export enum MapIconPosition {
  X = 13.5,
  Y = 39
}

export enum RaitingValues {
  MaxStars = 5,
  MaxValue = 100
}

export enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  AppAction = 'APP_ACTION'
}

export enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0
}

export enum UpdateType {
  CurrentOffer = 'CURRENT_OFFER',
  Nearby = 'NEARBY'
}

export enum LengthComment {
  Min = 50,
  Max = 300
}

export const RatingData = [
  {
    title: 'perfect',
    value: 5
  },
  {
    title: 'good',
    value: 4
  },
  {
    title: 'not bad',
    value: 3
  },
  {
    title: 'badly',
    value: 2
  },
  {
    title: 'terribly',
    value: 1
  }
];

export const IMG_MARKER_DEFAULT = '../img/pin.svg';
export const IMG_MARKER_CURRENT = '../img/pin-active.svg';
export const INSTANCE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const DATE_FORMAT = 'MMMM YYYY';

export const TIMEOUT_ERROR = 2000;
export const TIMEOUT_PASSWORD_ERROR = 3000;
export const RE = /^(?=.*[A-Za-z])(?=.*[0-9]).{2,}$/;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_RANDOM_CITY = 5;

export const NEARBY_OFFERS_COUNT = 3;
export const IMAGES_COUNT = 6;

