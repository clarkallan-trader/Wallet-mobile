import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Logo, Base } from '../../components';
import styles from './styles';

export default class Confirmation extends React.Component {
  onPress() {
    this.props.navigation.navigate('Signin');
  }
  render() {
    return (
      <Base style={styles.container}>
        <Text style={styles.instructions}>
          Armazene seus bitcoins, litecoins, ethereum, lunes, etc. Todas as suas
          criptomoedas na palma da mão.
        </Text>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => this.onPress()}>
          <Text style={styles.start}>INICIAR</Text>
        </TouchableOpacity>
      </Base>
    );
  }
}
