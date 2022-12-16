import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute, updateComments, updateCurrentOffer, updateFavoriteOffers, updateNearbyOffers, updateOffers } from './action';
import { AuthData } from '../types/auth-data';
import { FavoriteStatusData } from '../types/favorite-status-data';
import { Hotel } from '../types/hotel';
import { Review, ReviewData } from '../types/comments';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute } from '../const';
import { dropUserData, saveUserData } from '../services/user-data';

const fetchCurrentOfferAction = createAsyncThunk<Hotel | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Hotel>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

const fetchOffersAction = createAsyncThunk<Hotel[] | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Hotel[]>(APIRoute.Offers);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

const fetchNearbyOffersAction = createAsyncThunk<Hotel[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffersAction',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Hotel[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

const setFavoriteStatusAction = createAsyncThunk<void, FavoriteStatusData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/setFavoriteStatus',
  async ({ currentId, status }, { dispatch, extra: api }) => {
    try {
      if (currentId) {
        const { data } = await api.post<Hotel>(`${APIRoute.Favorite}/${currentId}/${status}`);
        dispatch(updateCurrentOffer(data));
        dispatch(updateFavoriteOffers(data));
        dispatch(updateNearbyOffers(data));
        dispatch(updateOffers(data));
      }
    } catch {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  },
);

const fetchFavoriteOffersAction = createAsyncThunk<Hotel[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Hotel[]>(APIRoute.Favorite);
    return data;
  }
);

const fetchCommentsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/getComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

const setCommentAction = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/setComment',
  async ({ id, formData }, { dispatch, extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, formData);
    dispatch(updateComments(data));
    return data;
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveUserData(data);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropUserData();
    dispatch(fetchOffersAction());
  },
);

export { fetchCurrentOfferAction, fetchOffersAction, fetchNearbyOffersAction, fetchFavoriteOffersAction, setFavoriteStatusAction, fetchCommentsAction, setCommentAction, checkAuthAction, loginAction, logoutAction };
