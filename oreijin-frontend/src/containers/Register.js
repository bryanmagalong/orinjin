import { connect } from 'react-redux';
import Register from '../components/Visitor/Register';

import {
  onChangeField, onToggleTC, handleSubmit,
} from '../actions/register';

const mapStateToProps = (state) => ({
  form: state.register.form,
  location: state.register.location,
  // Terms and Conditions checkbox value
  isTCChecked: state.register.isTCChecked,
  loading: state.register.loading,
  isError: state.register.isError,
  isSuccess: state.register.isSuccess,
  errors: state.register.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  onToggleTC: () => dispatch(onToggleTC()),
  handleSubmit: () => dispatch(handleSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
