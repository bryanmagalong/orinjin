export const GET_SERVICES_EXCERPT = 'GET_SERVICES_EXCERPT';
export const GET_SERVICES_EXCERPT_SUCCESS = 'GET_SERVICES_EXCERPT_SUCCESS';

export const GET_USERS_EXCERPT = 'GET_USERS_EXCERPT';
export const GET_USERS_EXCERPT_SUCCESS = 'GET_USERS_EXCERPT_SUCCESS';

export const getServicesExcerpt = () => ({
  type: GET_SERVICES_EXCERPT,
});

export const getServicesExcerptSuccess = (payload) => ({
  type: GET_SERVICES_EXCERPT_SUCCESS,
  payload,
});

export const getUsersExcerpt = () => ({
  type: GET_USERS_EXCERPT,
});

export const getUsersExcerptSuccess = (payload) => ({
  type: GET_USERS_EXCERPT_SUCCESS,
  payload,
});
