import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/index';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritesOffers={favoritesOffers} />
          </section >
        </div >
      </main >
      <Footer isContainer={favoritesOffers.length > 0} />
    </div>
  );
}

export default FavoritesPage;
