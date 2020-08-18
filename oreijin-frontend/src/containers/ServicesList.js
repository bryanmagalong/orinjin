import { connect } from 'react-redux';

import { getUserServicesList } from '../actions/user';
import { setIsSuccessFalse } from '../actions/service';
import ServicesList from '../components/Member/ServicesList';

const mapStateToProps = (state) => ({
  services: state.user.services,
  isLogged: state.user.isLogged,
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getUserServicesList: () => dispatch(getUserServicesList()),
  setIsSuccessFalse: () => dispatch(setIsSuccessFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
