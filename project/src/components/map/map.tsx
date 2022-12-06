import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import { isEqual } from 'lodash';
import { Hotel, LocationType, CityType } from '../../types/hotel';
import { IMG_MARKER_DEFAULT, IMG_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';

type MapProps = {
  city: CityType;
  offers: Hotel[];
  selectedPoint?: LocationType | null;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: IMG_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: IMG_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({ city, offers, selectedPoint, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const points: LocationType[] = offers.map((el) => el.location);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && isEqual(point, selectedPoint)
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude
      }, city.location.zoom);
    }
  }, [map, city]);

  return (
    <section
      className={`map ${className}`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
