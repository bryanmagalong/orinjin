export const LOGIN_FORM_ERROR = 'LOGIN_FORM_ERROR';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const ADD_SERVICE_FORM_ERROR = 'ADD_SERVICE_FORM_ERROR';
export const UPDATE_SERVICE_FORM_ERROR = 'UPDATE_SERVICE_FORM_ERROR';
export const PROFILE_FORM_ERROR = 'PROFILE_FORM_ERROR';
export const REPLY_FORM_ERROR = 'REPLY_FORM_ERROR';

export const loginFormError = (payload) => ({
  type: LOGIN_FORM_ERROR,
  payload,
});

export const registerError = (payload) => ({
  type: REGISTER_ERROR,
  payload,
});

export const addServiceFormError = (payload) => ({
  type: ADD_SERVICE_FORM_ERROR,
  payload,
});

export const updateServiceFormError = (payload) => ({
  type: UPDATE_SERVICE_FORM_ERROR,
  payload,
});

export const replyFormError = () => ({
  type: REPLY_FORM_ERROR,
});
