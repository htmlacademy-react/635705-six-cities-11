import { Hotel } from '../../types/hotel';

type GalleryProps = {
  offer: Hotel;
}

function Gallery({offer}: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((image) => (
          <div key={`${offer.id}-${image}`} className="property__image-wrapper">
            <img className="property__image" src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
