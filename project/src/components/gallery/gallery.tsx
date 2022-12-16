import { memo } from 'react';
import { IMAGES_COUNT } from '../../const';
import { Hotel } from '../../types/hotel';

type GalleryProps = {
  offer: Hotel;
}

function Gallery({ offer }: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          offer?.images.slice(0, IMAGES_COUNT).map((image) => (
            <div key={image} className="property__image-wrapper">
              <img className="property__image" src={image} alt={offer.type} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default memo(Gallery);
