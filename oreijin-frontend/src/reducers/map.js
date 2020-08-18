import { LOGIN_SUCCESS, UPDATE_PROFILE_SUCCESS } from '../actions/user';
import { ON_CHANGE_VIEWPORT, SET_SELECTED_SERVICE } from '../actions/map';

const initialState = {
  viewport: {
    latitude: 48.866667,
    longitude: 2.333333,
    width: '100%',
    height: '100%',
    zoom: 11.070872916521907,
  },
  selectedService: null,
};

const map = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        viewport: {
          ...state.viewport,
          latitude: parseFloat(sessionStorage.getItem('latitude')),
          longitude: parseFloat(sessionStorage.getItem('longitude')),
          zoom: 11.070872916521907,
        },
        selectedService: null,
      };
    case ON_CHANGE_VIEWPORT:
      return {
        viewport: {
          ...action.payload,
          width: '100%',
          height: '100%',
        },
      };
    case SET_SELECTED_SERVICE:
      return {
        ...state,
        selectedService: { ...action.payload },
      };
    default:
      return state;
  }
};

export default map;
