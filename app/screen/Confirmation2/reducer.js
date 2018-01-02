import types from './types';

const initialState = {
  loading: false,
  error: '',
  message: '',
  codeInput: '',
  phoneNumber: '+55',
  confirmResult: null,
};

const confirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.REQUEST_CODE_SUCCESS:
      return {
        ...state,
        confirmResult: action.confirmResult,
      };
    case types.REQUEST_CODE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case types.CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case types.CONFIRM_CODE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default confirmationReducer;
