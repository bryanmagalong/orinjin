import React, { useEffect } from 'react';
import slugify from 'slugify';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import Service from '../../../containers/Service';
import mapToken from '../../../../mapbox.config';

// == Import
import './styles.scss';
import logoMarker from '../../../assets/images/logo.svg';

// TODO hide token api
const mapAccess = {
  mapboxApiAccessToken: mapToken,
};

const Map = ({
  viewport, services, onChangeViewport, setSelectedService, selectedService,
}) => {

  useEffect(() => {
  }, [viewport, services]);

  return (
    <ReactMapGL
      {...viewport}
      // API token
      {...mapAccess}
      // Map styles
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      // Allows map navigation
      onViewportChange={(newViewport) => {
        onChangeViewport(newViewport);
      }}
    >
      <div style={{ position: 'absolute', right: 0, margin: '1rem' }}>
        <NavigationControl />
      </div>
      {
        // Services mapping
        // For each service, a marker is rendered with the service localization
        services.length !== 0 && services.map((service) => (
          <Marker
            key={uuid()}
            latitude={parseFloat(service.user.latitude)}
            longitude={parseFloat(service.user.longitude)}
          >
            <div
              onClick={(evt) => {
                evt.preventDefault();
                setSelectedService(service);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                src={service.user.avatar ? service.user.avatar : logoMarker}
                alt="marqueur"
              />
            </div>
          </Marker>
        ))
      }
      {
        // Popup display
        selectedService ? (
          <div className="map__popup">
            <Service
              key={`${selectedService.title}-marker`}
              {...selectedService}
              slug={slugify(`${selectedService.id} ${selectedService.title}`, { lower: true })}
            />
          </div>
        ) : null
      }
    </ReactMapGL>
  );
};

Map.defaultProps = {
  selectedService: null,
};

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
  onChangeViewport: PropTypes.func.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  selectedService: PropTypes.object,
};

// == Export
export default Map;
