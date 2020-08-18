export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_TOGGLE_TC = 'ON_TOGGLE_TC';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_LOCATION_ERROR = 'UPDATE_LOCATION_ERROR';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const HANDLE_SUBMIT_SUCCESS = 'HANDLE_SUBMIT_SUCCESS';
export const HANDLE_SUBMIT_ERROR = 'HANDLE_SUBMIT_ERROR';

export const LOADING_REGISTER = 'LOADING_REGISTER';
// export const HANDLE_SUBMIT_ERROR = 'HANDLE_SUBMIT_ERROR';


export const onChangeField = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const onToggleTC = () => ({
  type: ON_TOGGLE_TC,
});

export const handleSubmit = () => ({
  type: HANDLE_SUBMIT,
});

export const handleSubmitSuccess = () => ({
  type: HANDLE_SUBMIT_SUCCESS,

});

export const handleSubmitError = (payload) => ({
  type: HANDLE_SUBMIT_ERROR,
  payload,
});

export const updateLocation = (payload) => ({
  type: UPDATE_LOCATION,
  payload,
});

export const updateLocationError = (payload) => ({
  type: UPDATE_LOCATION_ERROR,
  payload,
});

export const loading = () => ({

  type: LOADING_REGISTER,
});
