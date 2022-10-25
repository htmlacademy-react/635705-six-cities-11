import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalsNum: number;
}

function App({ rentalsNum }: AppProps): JSX.Element {
  return (
    <MainPage rentalsNum={rentalsNum} />
  );
}

export default App;
