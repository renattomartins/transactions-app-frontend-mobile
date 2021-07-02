import React from 'react';
import {View, Alert} from 'react-native';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import styles from './styles';

const InitialScreen = props => {
  return (
    <View style={styles.main}>
      <View style={styles.logoArea}>
        <Logo />
      </View>
      <View style={styles.buttonsArea}>
        <Button title="Cadastre-se" onPress={() => Alert.alert('Rá!')} />
      </View>
    </View>
  );
};

export default InitialScreen;
