import React from 'react';
import {View, TextInput, Alert} from 'react-native';

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
        <TextInput
          style={styles.onboardingFields}
          placeholder="email"
          placeholderTextColor={'#91C8EB'}
        />
        <TextInput
          style={styles.onboardingFields}
          placeholder="senha"
          placeholderTextColor={'#91C8EB'}
        />
        <TextInput
          style={styles.onboardingFields}
          placeholder="repetir senha"
          placeholderTextColor={'#91C8EB'}
        />
        <Button
          title="Cadastrar"
          onPress={() => Alert.alert('Usuário cadastrado!')}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
