import {
  CHANGE_LOGIN_FIELD, CHANGE_PROFILE_FIELD,
  LOGIN_SUCCESS, LOGIN_ERROR,
  LOGOUT_SUCCESS, LOGIN_LOADING,
  DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_ERROR, GET_USER_SUCCESS,
  GET_USER_SERVICES_LIST_SUCCESS,
  UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS,
  GET_USER_ERROR, RESET_PROFILE,
} from '../actions/user';

import { LOGIN_FORM_ERROR } from '../actions/form';


import { RESET_NOT_FOUND } from '../actions/error404';


const initialState = {
  form: {
    username: '',
    password: '',
  },
  profile: {},
  profileForm: {},
  services: [],
  isLogged: false,
  loading: false,
  isSuccess: false,
  isError: false,
  errors: [],
  notFound: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        form: {
          username: '',
          password: '',
        },
        infos: {
          ...action.payload,
        },
        errors: [],
        services: [],
        isLogged: true,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        services: [],
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        errors: [],
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        form: {
          username: '',
          password: '',
        },
        profile: {},
        profileForm: {},
        services: [],
        isLogged: false,
        loading: false,
        isSuccess: false,
        isError: false,
        errors: [],
      };
    case DELETE_ACCOUNT_ERROR:
      return {
        ...state,
        isError: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        profile: {
          ...action.payload,
        },
        profileForm: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          postalCode: action.payload.postalCode,
          address: action.payload.address,
          city: action.payload.city,
          notFound: false,
        },
      };
    case GET_USER_ERROR:
      return {
        ...state,
        notFound: true,
      };
    case CHANGE_PROFILE_FIELD:
      return {
        ...state,
        profileForm: {
          ...state.profileForm,
          ...action.payload,
        },
      };
    case GET_USER_SERVICES_LIST_SUCCESS:
      return {
        ...state,
        services: [
          ...action.payload,
        ],
      };
    case UPDATE_PROFILE_ERROR:
    case LOGIN_FORM_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
        errors: [
          ...action.payload,
        ],
        loading: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isError: false,
        isSuccess: true,
        errors: [],
      };
    case RESET_NOT_FOUND:
      return {
        ...state,
        notFound: false,
      };
    case RESET_PROFILE:
      return {
        ...state,
        isError: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};
