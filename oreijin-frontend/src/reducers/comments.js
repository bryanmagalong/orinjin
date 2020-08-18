// Import actions
import { ON_CHANGE_FIELD_REPLY, ADD_COMMENT_SUCCESS } from '../actions/comments';
import { REPLY_FORM_ERROR } from '../actions/form';

const initialState = {
  list: [],
  reply: '',
  isError: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        reply: '',
        isError: false,
      };
    case REPLY_FORM_ERROR:
      return {
        ...state,
        isError: true,
      };
    case ON_CHANGE_FIELD_REPLY:
      return {
        ...state,
        reply: action.payload,
      };
    default:
      return state;
  }
};
