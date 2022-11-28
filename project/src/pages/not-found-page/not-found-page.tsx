import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <h1>404 Not Found</h1>
        <Link to="/">Back to the main page</Link>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
