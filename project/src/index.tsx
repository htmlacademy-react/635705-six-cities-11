import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Setting = {
  RentalsNum: 5,
  IsAuthorized: false,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      rentalsNum={Setting.RentalsNum}
      isAuthorized={Setting.IsAuthorized}
      offers={offers}
    />
  </React.StrictMode>,
);
