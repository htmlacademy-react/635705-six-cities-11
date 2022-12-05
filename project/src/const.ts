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

export enum HouseTypes {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export const IMG_MARKER_DEFAULT = 'img/pin.svg';

export const IMG_MARKER_CURRENT = 'img/pin-active.svg';

export enum TypeOffersSort {
  Default = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const TypeOffersSortArray = [TypeOffersSort.Default, TypeOffersSort.LowToHigh, TypeOffersSort.HighToLow, TypeOffersSort.TopRated];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export const RATING_STARS = ['1', '2', '3', '4', '5'];

export enum NameSpace {
  DataOffers = 'DATA_OFFERS',
  DataComments = 'DATA_COMMENTS',
  Sort = 'SORT',
  User = 'USER',
  Offers = 'OFFERS',
}
