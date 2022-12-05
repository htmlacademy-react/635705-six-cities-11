import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Hotel } from '../types/hotel';
import { CommentType, CommentSendType } from '../types/comments';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { redirectToRoute } from './action';
import { loadAuthInfo } from '../store/user-process/user-process';
import { loadCommentsNew } from '../store/comments-data/comments-data';

export const fetchOffersAction = createAsyncThunk<Hotel[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const response = await api.get<Hotel[]>(APIRoute.Offers);
    return response.data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(loadAuthInfo({ authInfo: data }));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchCommentsAction = createAsyncThunk<CommentType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<CommentType[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const sendNewComment = createAsyncThunk<void, CommentSendType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendNewComment',
  async ({ comment, rating, offerID }, { dispatch, extra: api }) => {
    const { data } = await api.post<CommentType[]>(`${APIRoute.Reviews}/${offerID}`, { comment, rating });
    dispatch(loadCommentsNew({ comments: data }));
  }
);
