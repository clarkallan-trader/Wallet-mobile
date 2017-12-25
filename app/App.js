/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';

import RootNavigator, { setNavigator } from './config/routes';
import store from './config/store';

export default class App extends React.Component<{}> {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigator
          ref={nav => {
            setNavigator(nav);
          }}
        />
      </Provider>
    );
  }
}
