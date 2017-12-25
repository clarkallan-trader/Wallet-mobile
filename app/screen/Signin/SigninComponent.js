// @flow
import React from 'react';
import { View } from 'react-native';

import {
  LogoSmall,
  Base,
  Tabs,
  TabLinkContainer,
  TabContent,
  LoginForm,
} from '../../components';
import styles from './styles';

export default class Signin extends React.Component<{}> {
  render() {
    let isTab1 = this.props.tabSelected === 'tab1' ? true : false;
    let isTab2 = this.props.tabSelected === 'tab2' ? true : false;
    return (
      <Base style={styles.container}>
        <LogoSmall />
        <Tabs>
          <View style={{ flexDirection: 'row' }}>
            <TabLinkContainer tabId="tab1" title="SIGNIN" isSelected={isTab1} />
            <TabLinkContainer tabId="tab2" title="SIGNUP" isSelected={isTab2} />
          </View>
          <View>
            <TabContent for="tab1" isVisible={isTab1}>
              <View style={styles.formContainer}>
                <LoginForm submit={this.props.requestLogin} modeAuth="SIGNIN" />
              </View>
            </TabContent>
            <TabContent for="tab2" isVisible={isTab2}>
              <View style={styles.formContainer}>
                <LoginForm
                  submit={this.props.requestSignup}
                  modeAuth="SIGNUP"
                />
              </View>
            </TabContent>
          </View>
        </Tabs>
      </Base>
    );
  }
}
