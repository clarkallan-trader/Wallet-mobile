import types from './types';

const initialState = {
  authorized: false,
  loading: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
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
    // SIGNIN
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        authorized: true,
        user: action.user,
      };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        authorized: false,
        user: false,
      };
    //SIGNUP
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        authorized: true,
        user: action.user,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        authorized: false,
        user: false,
      };
    //SIGNOUT
    case types.SIGNOUT_SUCCESS:
      return {
        ...state,
        authorized: false,
        user: false,
      };
    case types.SIGNOUT_ERROR:
      return {
        ...state,
        authorized: false,
        user: false,
      };
    default:
      return state;
  }
};

export default authReducer;
