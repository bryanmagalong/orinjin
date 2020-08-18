import { connect } from 'react-redux';
import Header from '../components/Header';
import auth from '../auth';

const mapStateToProps = () => ({
  isLogged: auth.isAuthenticated() !== null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
