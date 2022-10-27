import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalsNum: number;
}

function App({ rentalsNum }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainPage rentalsNum={rentalsNum} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
