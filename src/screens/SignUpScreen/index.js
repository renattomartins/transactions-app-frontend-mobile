import React from 'react';
import {View, Alert} from 'react-native';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import styles from './styles';

const SignUpScreen = props => {
  return (
    <View style={styles.main}>
      <View style={styles.headerArea}>
        <Logo isLabelVisisble={false} size="Medium" />
      </View>
      <View style={styles.inputsArea}>
        <Button
          title="Cadastrar"
          onPress={() => Alert.alert('Usuário cadastrado!')}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
