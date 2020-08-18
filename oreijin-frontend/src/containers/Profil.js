import { connect } from 'react-redux';
import {
  deleteAccount, getUser, changeProfileField, updateProfile, resetProfile,
} from '../actions/user';
import { uploadImage } from '../actions/uploads';
import Profil from '../components/Member/Profil';
import logo from '../assets/images/logo.png';
import auth from '../auth';

const mapStateToProps = (state, ownProps) => ({
  isLogged: auth.isAuthenticated() !== null,
  isSuccess: state.user.isSuccess,
  isError: state.user.isError,
  // extract the user's id from the slug
  userId: ownProps.match.params.user.split('-').pop(),
  profile: state.user.profile,
  form: state.user.profileForm,
  errors: state.user.errors,
  notFound: state.user.notFound,
  // get user's profile avatar if it exists, else -> get o'rinjin logo
  avatar: state.user.profile.avatar ? state.user.profile.avatar : logo,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteAccount: (payload) => dispatch(deleteAccount(payload)),
  getUser: (payload) => dispatch(getUser(payload)),
  onChangeProfileField: (payload) => dispatch(changeProfileField(payload)),
  onUpdateProfile: () => dispatch(updateProfile()),
  uploadImage: (payload) => dispatch(uploadImage(payload)),
  resetProfile: () => dispatch(resetProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
