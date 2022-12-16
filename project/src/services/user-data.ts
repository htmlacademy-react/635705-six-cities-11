import { UserData } from '../types/user-data';

const USER_DATA_KEY_NAME = 'six-cities-user-data';

const getUserData = (): UserData => {
  const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY_NAME) as string) as UserData;
  return userData ?? '';
};

const saveUserData = (userData: UserData): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(userData));
};

const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};

export { getUserData, saveUserData, dropUserData };
