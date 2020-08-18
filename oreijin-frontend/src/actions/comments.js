export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';

export const ON_CHANGE_FIELD_REPLY = 'ON_CHANGE_FIELD_REPLY';

export const getComment = (payload) => ({
  type: GET_COMMENT,
  payload,
});

export const getCommentSuccess = (payload) => ({
  type: GET_COMMENT_SUCCESS,
  payload,
});

export const getCommentError = () => ({
  type: GET_COMMENT_ERROR,
});

export const addComment = () => ({
  type: ADD_COMMENT,
});

export const addCommentSuccess = (payload) => ({
  type: ADD_COMMENT_SUCCESS,
  payload,
});

export const addCommentError = () => ({
  type: ADD_COMMENT_ERROR,
});

export const onChangeFieldReply = (payload) => ({
  type: ON_CHANGE_FIELD_REPLY,
  payload,
});
