import { connect } from 'react-redux';
import { getComment } from '../actions/comments';
import Response from '../components/Partials/Response';


const mapStateToProps = (state) => ({
  comments: state.comments.list,
});

const mapDispatchToProps = (dispatch) => ({
  getComment: (payload) => dispatch(getComment(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Response);
