import { connect } from 'react-redux';

import { getServicesExcerpt, getUsersExcerpt } from '../actions/homeVisitor';

import HomeVisitor from '../components/Home/HomeVisitor';

const mapStateToProps = (state) => ({
  services: state.homeVisitor.services,
  users: state.homeVisitor.users,
});

const mapDispatchToProps = (dispatch) => ({
  getServicesExcerpt: () => dispatch(getServicesExcerpt()),
  getUsersExcerpt: () => dispatch(getUsersExcerpt()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeVisitor);
