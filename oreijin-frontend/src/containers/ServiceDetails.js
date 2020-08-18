import { connect } from 'react-redux';
import { getServiceIdFromSlug } from '../reducers/services';
import { getService } from '../actions/service';
import { getCategoriesList } from '../actions/categories';
import ServiceDetails from '../components/Member/ServiceDetails';
import { findCategoryById } from '../reducers/categories';
import { addComment, onChangeFieldReply } from '../actions/comments';
import { getUser } from '../actions/user';
import { replyFormError } from '../actions/form';

import logo from '../assets/images/logo3.png';


const mapStateToProps = (state, ownProps) => ({
  service: state.services.service,
  reply: state.comments.reply,
  id: getServiceIdFromSlug(ownProps.match.params.slug),
  category: findCategoryById(state.services.service.serviceCategory.id, state.categories),
  commentListLength: state.comments.list.length,
  isError: state.comments.isError,
  notFound: state.services.notFound,
  // get user's profile avatar if it exists, else -> get o'rinjin logo
  avatar: state.services.service.user.avatar ? state.services.service.user.avatar : logo,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFieldReply: (payload) => dispatch(onChangeFieldReply(payload)),
  getService: (payload) => dispatch(getService(payload)),
  getCategoriesList: () => dispatch(getCategoriesList()),
  addComment: (payload) => dispatch(addComment(payload)),
  replyFormError: () => dispatch(replyFormError()),
  getUser: (payload) => dispatch(getUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
