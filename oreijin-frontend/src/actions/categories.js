export const GET_CATEGORIES_LIST = 'GET_CATEGORIES_LIST';
export const GET_CATEGORIES_LIST_SUCCESS = 'GET_CATEGORIES_LIST_SUCCESS';

export const getCategoriesList = () => ({
  type: GET_CATEGORIES_LIST,
});

export const getCategoriesListSuccess = (payload) => ({
  type: GET_CATEGORIES_LIST_SUCCESS,
  payload,
});
