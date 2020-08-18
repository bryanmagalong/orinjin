import axios from 'axios';
import baseURL from '../axios';
import {
  GET_SERVICES_EXCERPT,
  GET_USERS_EXCERPT,
  getServicesExcerptSuccess,
  getUsersExcerptSuccess,
} from '../actions/homeVisitor';

// eslint-disable-next-line consistent-return
const homeVisitorMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SERVICES_EXCERPT:
      axios({
        method: 'get',
        url: `${baseURL}/services/home`,
      })
        .then((res) => {
          store.dispatch(getServicesExcerptSuccess(res.data));
        });
      break;
    case GET_USERS_EXCERPT:
      axios({
        method: 'get',
        url: `${baseURL}/users/home`,
      })
        .then((res) => {
          store.dispatch(getUsersExcerptSuccess(res.data));
        });
      break;
    default: return next(action);
  }
};

export default homeVisitorMiddleware;
