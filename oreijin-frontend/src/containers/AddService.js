import { connect } from 'react-redux';
import slugify from 'slugify';
import AddService from '../components/Member/AddService';
import { getCategoriesList } from '../actions/categories';
import { uploadServiceImage } from '../actions/uploads';
import {
  onChangeField, onChangeFieldType, addService, resetServiceForm,
} from '../actions/service';

import { getCategoriesOptions } from '../reducers/categories';

const mapStateToProps = (state) => ({
  form: {
    ...state.services.form,
    user: parseInt(sessionStorage.getItem('id'), 10),
  },
  categories: getCategoriesOptions(state.categories),
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
  errors: state.services.errors,
  // get slug with user's names and id for link redirection
  userSlug: slugify(`${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')} ${sessionStorage.getItem('id')}`, { lower: true }),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeField: (inputName, inputValue) => dispatch(onChangeField({
    [inputName]: inputValue,
  })),
  onChangeFieldType: (payload) => dispatch(onChangeFieldType({
    // eslint-disable-next-line no-unneeded-ternary
    type: payload ? true : false,
  })),
  addService: (payload) => dispatch(addService(payload)),
  resetServiceForm: () => dispatch(resetServiceForm()),
  getCategoriesList: () => dispatch(getCategoriesList()),
  uploadServiceImage: (payload) => dispatch(uploadServiceImage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddService);
