import { connect } from 'react-redux';
import Map from '../components/Partials/Map';
import { onChangeViewport, setSelectedService } from '../actions/map';

const mapStateToProps = (state) => ({
  viewport: state.map.viewport,
  services: state.services.list,
  selectedService: state.map.selectedService,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeViewport: (payload) => dispatch(onChangeViewport(payload)),
  setSelectedService: (payload) => dispatch(setSelectedService(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
