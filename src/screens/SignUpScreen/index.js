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
          autoCapitalize={'none'}
          autoCompleteType={'email'}
          autoCorrect={false}
          keyboardType={'email-address'}
          maxLength={60}
          returnKeyType={'next'}
          textContentType={'username'}
        />
        <TextInput
          style={styles.onboardingFields}
          placeholder="senha"
          placeholderTextColor={'#91C8EB'}
          autoCapitalize={'none'}
          autoCompleteType={'password'}
          autoCorrect={false}
          maxLength={60}
          returnKeyType={'next'}
          secureTextEntry={true}
          textContentType={'newPassword'}
          passwordRules={
            'minlength: 8; maxlength: 30; required: lower; required: upper; required: digit; required: [-];'
          }
        />
        <TextInput
          style={styles.onboardingFields}
          placeholder="repetir senha"
          placeholderTextColor={'#91C8EB'}
          autoCapitalize={'none'}
          autoCompleteType={'password'}
          autoCorrect={false}
          maxLength={60}
          returnKeyType={'send'}
          secureTextEntry={true}
        />
        <Button
          title="Cadastrar"
          onPress={() => Alert.alert('Usuário cadastrado!')}
          width="50%"
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
