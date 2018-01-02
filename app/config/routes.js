import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { View, Button } from 'react-native';

import { Header } from '../components';

import { Introduction } from '../screen/Introduction';
import { SigninContainer } from '../screen/Signin';
import { Main } from '../screen/Main';
import { ConfirmationContainer } from '../screen/Confirmation2';

const RootNavigator = StackNavigator({
  Signin: {
    screen: SigninContainer,
    navigationOptions: {
      header: <View />,
    },
  },
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      header: <View />,
    },
  },
  Confirmation: {
    screen: ConfirmationContainer,
    navigationOptions: {
      header: <View />,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: <View />,
    },
  },
});

let navigator;

export function setNavigator(nav) {
  navigator = nav;
}

export function navigate(routeName, params) {
  if (navigator) {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  }
}

export default RootNavigator;
