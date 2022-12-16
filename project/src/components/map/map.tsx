import { memo, useEffect, useRef } from 'react';
import L, { Icon, Marker } from 'leaflet';
import { isEqual } from 'lodash';
import useMap from '../../hooks/useMap/useMap';
import 'leaflet/dist/leaflet.css';
import { Hotel, City } from '../../types/hotel';
import { IMG_MARKER_DEFAULT, IMG_MARKER_CURRENT, MapIconSize, MapIconPosition } from '../../const';

type MapProps = {
  city: City;
  offers: Hotel[];
  activeCard?: Hotel | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: IMG_MARKER_DEFAULT,
  iconSize: [MapIconSize.Width, MapIconSize.Height],
  iconAnchor: [MapIconPosition.X, MapIconPosition.Y]
});

const currentCustomIcon = new Icon({
  iconUrl: IMG_MARKER_CURRENT,
  iconSize: [MapIconSize.Width, MapIconSize.Height],
  iconAnchor: [MapIconPosition.X, MapIconPosition.Y]
});

function Map({ city, offers, activeCard }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layerGroup = L.layerGroup([]);
    if (map) {
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            activeCard !== undefined && isEqual(activeCard, point)
              ? currentCustomIcon
              : defaultCustomIcon
          );
        layerGroup.addLayer(marker);
      });
      layerGroup.addTo(map);
    }

    return () => {
      map?.removeLayer(layerGroup);
    };

  }, [offers, activeCard, map]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}></div>
  );
}

export default memo(Map);
