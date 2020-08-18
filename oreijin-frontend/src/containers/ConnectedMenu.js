import { connect } from 'react-redux';
import slugify from 'slugify';
import { logout } from '../actions/user';


import ConnectedMenu from '../components/Partials/ConnectedMenu';

const mapStateToProps = () => ({
  // get slug with user's names and id for link redirection
  userSlug: slugify(`${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')} ${sessionStorage.getItem('id')}`, { lower: true }),
  // isAdmin: true if the user is an admin or a moderator, else false
  isAdmin: sessionStorage.getItem('roles').split(',').includes('ROLE_ADMIN') || sessionStorage.getItem('roles').split(',').includes('ROLE_MODO'),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);
