import { connect } from 'react-redux';
import UpdateService from '../components/Member/UpdateService';
import { getCategoriesList } from '../actions/categories';
import {
  onChangeFieldEdit, getService, resetServiceForm, editService,
} from '../actions/service';
import { getCategoriesOptions } from '../reducers/categories';
import { getServiceIdFromSlug } from '../reducers/services';

const mapStateToProps = (state, ownProps) => ({
  id: getServiceIdFromSlug(ownProps.match.params.slug),
  categories: getCategoriesOptions(state.categories),
  author: state.services.service.user,
  userId: parseInt(sessionStorage.getItem('id'), 10),
  form: state.services.editForm,
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
  errors: state.services.errors,
  notFound: state.services.notFound,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFieldEdit: (inputName, inputValue) => dispatch(onChangeFieldEdit({
    [inputName]: inputValue,
  })),
  editService: () => dispatch(editService()),
  resetServiceForm: () => dispatch(resetServiceForm()),
  getCategoriesList: () => dispatch(getCategoriesList()),
  getService: (payload) => dispatch(getService(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateService);
