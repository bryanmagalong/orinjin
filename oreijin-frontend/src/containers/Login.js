import { connect } from 'react-redux';
import Login from '../components/Visitor/Login';

import { changeLoginField, login, logout } from '../actions/user';

import { loginFormError } from '../actions/form';

const mapStateToProps = (state) => ({
  username: state.user.form.username,
  password: state.user.form.password,
  isLogged: state.user.isLogged,
  loading: state.user.loading,
  errors: state.user.errors,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
  loginFormError: (payload) => {
    dispatch(loginFormError(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
