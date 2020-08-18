export const GET_SERVICES_LIST = 'GET_SERVICES_LIST';
export const GET_SERVICES_LIST_SUCCESS = 'GET_SERVICES_LIST_SUCCESS';
export const GET_SERVICE = 'GET_SERVICE';
export const GET_SERVICE_SUCCESS = 'GET_SERVICE_SUCCESS';
export const GET_SERVICE_ERROR = 'GET_SERVICE_ERROR';
export const ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';
export const ON_CHANGE_FIELD_TYPE = 'ON_CHANGE_FIELD_TYPE';
export const ON_CHANGE_FIELD_EDIT = 'ON_CHANGE_FIELD_EDIT';
export const ADD_SERVICE = 'ADD_SERVICE';
export const ADD_SERVICE_SUCCESS = 'ADD_SERVICE_SUCCESS';
export const ADD_SERVICE_ERROR = 'ADD_SERVICE_ERROR';
export const RESET_SERVICE_FORM = 'RESET_SERVICE_FORM';
export const DELETE_SERVICE = 'DELETE_SERVICE';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_ERROR = 'DELETE_SERVICE_ERROR';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const EDIT_SERVICE_SUCCESS = 'EDIT_SERVICE_SUCCESS';
export const EDIT_SERVICE_ERROR = 'EDIT_SERVICE_ERROR';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const GET_SERVICES_LIST_BY_POSTAL_CODE = 'GET_SERVICES_LIST_BY_POSTAL_CODE';
export const GET_SERVICES_LIST_BY_POSTAL_CODE_SUCCESS = 'GET_SERVICES_LIST_BY_POSTAL_CODE_SUCCESS';
export const GET_SERVICES_LIST_BY_POSTAL_CODE_ERROR = 'GET_SERVICES_LIST_BY_POSTAL_CODE_ERROR';
export const SET_SELECTED_LIST = 'SET_SELECTED_LIST';
export const SET_IS_SUCCESS_FALSE = 'SET_IS_SUCCESS_FALSE';

export const setSelectedList = (payload) => ({
  type: SET_SELECTED_LIST,
  payload,
});

export const getServicesListByPostalCode = () => ({
  type: GET_SERVICES_LIST_BY_POSTAL_CODE,
});

export const getServicesListByPostalCodeSuccess = (payload) => ({
  type: GET_SERVICES_LIST_BY_POSTAL_CODE_SUCCESS,
  payload,
});

export const getServicesListByPostalCodeError = () => ({
  type: GET_SERVICES_LIST_BY_POSTAL_CODE_ERROR,
});

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const getServicesList = () => ({
  type: GET_SERVICES_LIST,
});

export const getService = (payload) => ({
  type: GET_SERVICE,
  payload,
});

export const getServiceSuccess = (payload) => ({
  type: GET_SERVICE_SUCCESS,
  payload,
});

export const getServiceError = () => ({
  type: GET_SERVICE_ERROR,
});

export const getServicesListSuccess = (payload) => ({
  type: GET_SERVICES_LIST_SUCCESS,
  payload,
});

export const onChangeField = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const onChangeFieldType = (payload) => ({
  type: ON_CHANGE_FIELD_TYPE,
  payload,
});

export const addService = (payload) => ({
  type: ADD_SERVICE,
  payload,
});

export const addServiceSuccess = (payload) => ({
  type: ADD_SERVICE_SUCCESS,
  payload,
});

export const addServiceError = (payload) => ({
  type: ADD_SERVICE_ERROR,
  payload,
});

export const resetServiceForm = () => ({
  type: RESET_SERVICE_FORM,
});

export const deleteService = (payload) => ({
  type: DELETE_SERVICE,
  payload,
});

export const deleteServiceSuccess = (payload) => ({
  type: DELETE_SERVICE_SUCCESS,
  payload,
});

export const deleteServiceError = (payload) => ({
  type: DELETE_SERVICE_ERROR,
  payload,
});

export const editService = () => ({
  type: EDIT_SERVICE,
});

export const editServiceSuccess = () => ({
  type: EDIT_SERVICE_SUCCESS,
});

export const editServiceError = (payload) => ({
  type: EDIT_SERVICE_ERROR,
  payload,
});

export const onChangeFieldEdit = (payload) => ({
  type: ON_CHANGE_FIELD_EDIT,
  payload,
});

export const setIsSuccessFalse = () => ({
  type: SET_IS_SUCCESS_FALSE,
});
