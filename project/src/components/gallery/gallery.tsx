type GalleryProps = {
  images: string[];
}

function Gallery({ images }: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
