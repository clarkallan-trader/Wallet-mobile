import types from './types';

import { auth, fb } from '../../config/firebase';
import { navigate } from '../../config/routes';

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

export const requestCode = values => {
  return dispatch => {
    dispatch(requestLoading());

    auth
      .signInWithPhoneNumber(values.phoneNumber)
      .then(confirmResult => {
        dispatch(requestFinished());
        dispatch(requestCodeSuccess(confirmResult));
      })
      .catch(error => {
        dispatch(requestFinished());
        console.log(error);
        dispatch(requestCodeError(error));
      });
  };
};

export const confirmCode = (codeInput, confirmResult, currentUser) => {
  return dispatch => {
    dispatch(requestLoading());

    let credential = fb.auth.PhoneAuthProvider.credential(
      confirmResult.verificationId,
      codeInput
    );

    currentUser.linkWithCredential(credential).then(
      function(user) {
        dispatch(requestFinished());
        dispatch(confirmCodeSuccess(user));
        navigate('Main');
      },
      function(error) {
        dispatch(requestFinished());
        console.log('Account linking error', error);
        dispatch(confirmCodeError(error));
      }
    );

    dispatch(requestFinished());
  };
};

const requestCodeSuccess = confirmResult => ({
  type: types.REQUEST_CODE_SUCCESS,
  confirmResult: confirmResult,
});

const requestCodeError = error => ({
  type: types.REQUEST_CODE_ERROR,
  error: error,
});

const confirmCodeSuccess = user => ({
  type: types.CONFIRM_CODE_SUCCESS,
  user: user,
});

const confirmCodeError = error => ({
  type: types.CONFIRM_CODE_ERROR,
  error: error,
});
