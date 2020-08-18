export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

export const CHANGE_PROFILE_FIELD = 'CHANGE_PROFILE_FIELD';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const CHECK_AUTH = 'CHECK_AUTH';

export const LOGIN_LOADING = 'LOADING';

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_ERROR = 'DELETE_ACCOUNT_ERROR';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const GET_USER_SERVICES_LIST = 'GET_USER_SERVICES_LIST';
export const GET_USER_SERVICES_LIST_SUCCESS = 'GET_USER_SERVICES_LIST_SUCCESS';
export const GET_USER_SERVICES_LIST_ERROR = 'GET_USER_SERVICES_ERROR';

export const RESET_PROFILE = 'RESET_PROFILE';

export const resetProfile = () => ({
  type: RESET_PROFILE,
});

export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    [name]: value,
  },
});

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});


export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const deleteAccount = (payload) => ({
  type: DELETE_ACCOUNT,
  payload,
});

export const deleteAccountSuccess = (payload) => ({
  type: DELETE_ACCOUNT_SUCCESS,
  payload,
});

export const deleteAccountError = () => ({
  type: DELETE_ACCOUNT_ERROR,
});

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserError = () => ({
  type: GET_USER_ERROR,
});

export const changeProfileField = (payload) => ({
  type: CHANGE_PROFILE_FIELD,
  payload,
});

export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

export const updateProfileSuccess = () => ({
  type: UPDATE_PROFILE_SUCCESS,
});

export const updateProfileError = (payload) => ({
  type: UPDATE_PROFILE_ERROR,
  payload,
});

export const getUserServicesList = () => ({
  type: GET_USER_SERVICES_LIST,
});

export const getUserServicesListSuccess = (payload) => ({
  type: GET_USER_SERVICES_LIST_SUCCESS,
  payload,
});

export const getUserServicesListError = () => ({
  type: GET_USER_SERVICES_LIST_ERROR,
});
