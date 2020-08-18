import { connect } from 'react-redux';
import Home from '../components/Home';
import auth from '../auth';

const mapStateToProps = () => ({
  isLogged: auth.isAuthenticated() !== null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
