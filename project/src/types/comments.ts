import { User } from './hotel';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type FormData = {
  comment: string;
  rating: number | null;
}

export type ReviewData = {
  id: number;
  formData: FormData;
}
