import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Hotel } from '../../types/hotel';

type FavoritesPageProps = {
  offers: Hotel[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
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
      <Footer />
    </div>
  );
}

export default FavoritesPage;
