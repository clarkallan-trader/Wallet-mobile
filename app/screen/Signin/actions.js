import types from './types';

import { auth, database } from '../../config/firebase';
import { navigate } from '../../config/routes';
import { Keyboard } from 'react-native';

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

export const requestLogin = values => {
  return dispatch => {
    dispatch(requestLoading());

    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(user => {
        dispatch(requestFinished());
        Keyboard.dismiss();
        dispatch(signinSuccess(user));
        navigate('Main');
      })
      .catch(error => {
        console.log(error);
        dispatch(signinError(error));
      });
  };
};

const signinSuccess = user => ({
  type: types.SIGNIN_SUCCESS,
  user: user,
});

const signinError = error => ({
  type: types.SIGNIN_ERROR,
  error: error,
});

export const requestSignup = values => {
  const { name, email, password } = values;

  let userData = {
    fname: '',
    lname: '',
    email: '',
    photoUrl: '',
  };

  return dispatch => {
    dispatch(requestLoading());

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user !== null) {
          userData.fname = name;
          userData.email = email;

          let userPath = '/users/' + user.uid;
          database
            .ref(userPath)
            .set(userData)
            .then(function() {
              dispatch(requestFinished());
              dispatch(signupSuccess(user));
              navigate('Confirmation');
            })
            .catch(error => {
              dispatch(requestFinished());
              console.error('Error writing document: ', error);
              dispatch(signupError(error));
            });
        }
      })
      .catch(error => dispatch(signupError(error)));
  };
};

const signupSuccess = user => ({
  type: types.SIGNUP_SUCCESS,
  user: user,
});

const signupError = error => ({
  type: types.SIGNUP_ERROR,
  error: error,
});

export const requestSignout = () => {
  return dispatch => {
    dispatch(requestLoading());
    auth
      .signOut()
      .then(() => {
        dispatch(requestFinished());
        dispatch(signoutSuccess());
        navigate('Sigin');
      })
      .catch(error => {
        dispatch(requestFinished());
        dispatch(signoutError(error));
      });
  };
};

const signoutSuccess = () => ({
  type: types.SIGNOUT_SUCCESS,
});

const signoutError = error => ({
  type: types.SIGNOUT_ERROR,
  error: error,
});

export const monitorSession = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Logged in');
        dispatch(userSignedIn(user));
      } else {
        console.log('Logged out');
        dispatch(userSignedOut());
      }
    });
  };
};

export const userSignedIn = user => ({
  type: types.USER_SIGNED_IN,
  user: user,
});

export const userSignedOut = () => ({
  type: types.USER_SIGNED_OUT,
});
