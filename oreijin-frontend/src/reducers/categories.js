// Import action
import { GET_CATEGORIES_LIST_SUCCESS } from '../actions/categories';

const initialState = {
  list: [],
};

/**
 * Get the category list for Select options
 *
 * @param {Object} state
 * @return {Array} the array of category
 */
export const getCategoriesOptions = (state = initialState) => state.list.map((category) => ({
  key: category.id,
  text: category.title,
  value: category.id,
}));

/**
 * Get the category that matches the id
 *
 * @param {Number} id
 * @param {Object} state
 * @return {Object} the category which matches the id
 */
// eslint-disable-next-line max-len
export const findCategoryById = (id, state = initialState) => state.list.find((item) => item.id === id);

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST_SUCCESS:
      return {
        list: [...action.payload],
      };
    default:
      return state;
  }
};
