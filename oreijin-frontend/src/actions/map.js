export const ON_CHANGE_VIEWPORT = 'ON_CHANGE_VIEWPORT';
export const SET_SELECTED_SERVICE = 'SET_SELECTED_SERVICE';

export const onChangeViewport = (payload) => ({
  type: ON_CHANGE_VIEWPORT,
  payload,
});

export const setSelectedService = (payload) => ({
  type: SET_SELECTED_SERVICE,
  payload,
});
