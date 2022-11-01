import { MAX_RATING } from './const';

export const getRating = (rating: number) => (Math.round(rating) / MAX_RATING) * 100;
