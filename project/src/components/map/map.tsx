import { useEffect, useRef } from 'react';
import { Icon, LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City, Hotel } from '../../types/hotel';

type MapProps = {
  city: City;
  points: Hotel[];
  selectedPoint?: Hotel;
  className: string;
};

function Map({ city, points, selectedPoint, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  });

  const currentCustomIcon = new Icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  });

  useEffect(() => {
    map?.setView([city.location.latitude, city.location.longitude], city.location.zoom);
  }, [city, map]);

  const layer = new LayerGroup();

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint && point === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          );

        layer.addLayer(marker);
      });

      layer.addTo(map);
    }

    return () => { layer.clearLayers(); };
  });

  return (
    <section
      className={`map ${className}`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
