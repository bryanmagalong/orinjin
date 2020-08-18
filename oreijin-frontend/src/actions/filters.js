export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';

export const filterByCategory = (payload) => ({
  type: FILTER_BY_CATEGORY,
  payload,
});

export const filterByType = (payload) => ({
  type: FILTER_BY_TYPE,
  payload,
});
