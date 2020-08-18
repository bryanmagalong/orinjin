// Import actions
import { GET_USERS_EXCERPT_SUCCESS, GET_SERVICES_EXCERPT_SUCCESS } from '../actions/homeVisitor';

const initialState = {
  services: [],
  users: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS_EXCERPT_SUCCESS:
      return {
        ...state,
        users: [...action.payload],
      };
    case GET_SERVICES_EXCERPT_SUCCESS:
      return {
        ...state,
        services: [...action.payload],
      };
    default:
      return state;
  }
};
