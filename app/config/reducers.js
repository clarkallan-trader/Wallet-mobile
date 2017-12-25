import { combineReducers } from 'redux';
import tabsReducer from '../components/tabs/reducer';
import authReducer from '../screen/Signin/reducer';
import confirmationReducer from '../screen/Confirmation/reducer';

const reducers = combineReducers({
  tabsReducer,
  auth: authReducer,
  authSMS: confirmationReducer,
});

export default reducers;
