import { MAX_RATING } from './const';

export const getRating = (rating?: number) => {
  if (rating === undefined) {
    return 0;
  }

  return (Math.round(rating) / MAX_RATING) * 100;
};

export const ucFirst = (str?: string) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};
