import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Base, Button } from '../../components';
import styles from './styles';
import { FormStyle } from '../../components/theme';

export default class Confirmation extends React.Component<{}> {
  static get propTypes() {
    return {
      authSMS: PropTypes.object,
      auth: PropTypes.object,
      requestCode: PropTypes.func,
      confirmCode: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.auth.user,
      message: this.props.authSMS.message,
      error: this.props.authSMS.error,
      phoneNumber: this.props.authSMS.phoneNumber,
      codeInput: this.props.authSMS.codeInput,
      confirmResult: this.props.authSMS.confirmResult,
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
    };
  }

  onSubmitPhoneNumber() {
    this.props.requestCode(this.state);
  }

  onSubmitCode() {
    let finalCodeInput =
      this.state.code1 +
      this.state.code2 +
      this.state.code3 +
      this.state.code4 +
      this.state.code5 +
      this.state.code6;
    this.props.confirmCode(
      finalCodeInput,
      this.props.authSMS.confirmResult,
      this.props.auth.user
    );
  }

  renderPhoneInput() {
    let confirmResult = this.props.authSMS.confirmResult;
    if (!confirmResult) {
      return (
        <View style={FormStyle.container}>
          <Icon name="phone" size={20} color="#fff" />
          <TextInput
            style={FormStyle.input}
            placeholder="+55"
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize="none"
            onChangeText={text => this.setState({ phoneNumber: text })}
            value={this.state.name}
            keyboardType={'phone-pad'}
            autoCorrect={false}
          />
        </View>
      );
    }
  }

  renderConfirmInput() {
    let confirmResult = this.props.authSMS.confirmResult;
    if (confirmResult) {
      return (
        <View>
          <View style={FormStyle.container}>
            <Text style={styles.instructions}>
              Aguardando para detectar automaticamente um SMS enviado para{' '}
              {this.props.phoneNumber}
            </Text>
            <Text style={styles.instructions}>Número errado?</Text>

            <Text style={{ paddingTop: 20, color: 'green' }}>
              Insira o código
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                ref={ref => (this.code1Input = ref)}
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 0,
                  color: '#fff',
                }}
                keyboardType={'phone-pad'}
                maxLength={1}
                onChangeText={text => {
                  this.setState({ code1: text });
                  if (text && text.length == 1) {
                    this.code2Input.focus();
                  }
                }}
              />
              <TextInput
                ref={ref => (this.code2Input = ref)}
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 0,
                  color: '#fff',
                }}
                keyboardType={'phone-pad'}
                maxLength={1}
                onChangeText={text => {
                  this.setState({ code2: text });
                  if (text && text.length == 1) {
                    this.code3Input.focus();
                  }
                }}
              />
              <TextInput
                ref={ref => (this.code3Input = ref)}
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 0,
                  color: '#fff',
                }}
                keyboardType={'phone-pad'}
                maxLength={1}
                onChangeText={text => {
                  this.setState({ code3: text });
                  if (text && text.length == 1) {
                    this.code4Input.focus();
                  }
                }}
              />
              <TextInput
                ref={ref => (this.code4Input = ref)}
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 0,
                  color: '#fff',
                }}
                keyboardType={'phone-pad'}
                maxLength={1}
                onChangeText={text => {
                  this.setState({ code4: text });
                  if (text && text.length == 1) {
                    this.code5Input.focus();
                  }
                }}
              />
              <TextInput
                ref={ref => (this.code5Input = ref)}
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 0,
                  color: '#fff',
                }}
                keyboardType={'phone-pad'}
                maxLength={1}
                onChangeText={text => {
                  this.setState({ code5: text });
                  if (text && text.length == 1) {
                    this.code6Input.focus();
                  }
                }}
              />
              <TextInput
                ref={ref => (this.code6Input = ref)}
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 0,
                  color: '#fff',
                }}
                keyboardType={'phone-pad'}
                onChangeText={code => this.setState({ code6: code })}
                maxLength={1}
              />
            </View>
            <Text style={{ paddingTop: 10, color: '#fff' }}>Reenviar SMS</Text>
          </View>
        </View>
      );
    }
  }

  renderButtons() {
    let confirmResult = this.props.authSMS.confirmResult;
    if (confirmResult) {
      return (
        <View style={FormStyle.container}>
          <Button
            text="Confirmar"
            type="primary"
            onPress={() => this.onSubmitCode()}
          />
        </View>
      );
    } else {
      return (
        <View style={FormStyle.container}>
          <Button
            text="Enviar"
            type="primary"
            onPress={() => this.onSubmitPhoneNumber()}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <Base>
        <Icon name="email" size={50} color="#fff" />
        <Text style={styles.instructions}>Confirmação via SMS</Text>

        {this.renderPhoneInput()}

        {this.renderConfirmInput()}

        {this.renderButtons()}
      </Base>
    );
  }

  // Confirmation.propTypes = {
  //   name: PropTypes.string
  // };
}
