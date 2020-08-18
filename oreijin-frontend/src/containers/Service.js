import { connect } from 'react-redux';
import { deleteService } from '../actions/service';
import Service from '../components/Partials/Service';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteService: (payload) => dispatch(deleteService(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
