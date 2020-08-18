import axios from 'axios';
// import jwt from 'jwt-decode';
import auth from '../auth';
import baseURL from '../axios';

import {
  LOGIN, LOGOUT,
  // CHECK_AUTH,
  loginSuccess,
  logoutSuccess,
  loginError,
  loginLoading,
} from '../actions/user';

import {
  getServicesListByPostalCode,
} from '../actions/service';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      store.dispatch(loginLoading());

      axios({
        method: 'post',
        url: `${baseURL}/api/login_check`,
        withCredentials: true,
        data: {
          username: store.getState().user.form.username,
          password: store.getState().user.form.password,
        },
      })
        .then((response) => {
          // Create sessionStorages
          if (auth.login(response.data.token)) {
            store.dispatch(loginSuccess());
            // create a cookie for token
            store.dispatch(getServicesListByPostalCode());
          }
        })
        .catch(() => {
          store.dispatch(loginError(['Email ou mot de passe invalide. Veuillez réessayer.']));
        });
      break;
    case LOGOUT:
      // Clear sessionStorage items
      auth.logout();
      store.dispatch(logoutSuccess());
      break;
    // case CHECK_AUTH: //! DEPRECATED ?
    //   // Check if the cookie exists
    //   // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    //   if (document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
    //     // Decode the token
    //     const userInfos = jwt(sessionStorage.getItem('token'));
    //     store.dispatch(loginSuccess());
    //     // store.dispatch(loginSuccess({}));
    //     store.dispatch(getServicesListByPostalCode(sessionStorage.getItem('postalcode')));
    //   }
    //   else return next(action);
    //   break;
    default:
      next(action);
  }
};
