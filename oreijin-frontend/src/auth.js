/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// Need jwt package for the authentification (the datas will be stored in the session storage)
import jwt from 'jwt-decode';

/**
 * Auth class for authentification verification
 */
class Auth {
  constructor() {
    this.token = null;
  }

  /**
   * On login, stores the jwt token and the user datas in session storage
   *
   * @param {String} token
   * @return {boolean}
   */
  login = (token) => {
    sessionStorage.setItem('token', token);
    // Get user datas from jwt token
    const userInfos = jwt(token);

    // Store datas in session storage
    for (const data in userInfos) {
      sessionStorage.setItem(data, userInfos[data]);
    }

    return true;
  }

  /**
   * On logout, destroy session storage
   */
  logout = () => {
    sessionStorage.clear();
  }

  /**
   * Checks if a user is authenticated
   */
  isAuthenticated = () => (sessionStorage.getItem('token'));
}

export default new Auth();
