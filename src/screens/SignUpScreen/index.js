import React from 'react';
import {View, Alert} from 'react-native';

import Logo from '../../components/atoms/Logo';
import TextInput from '../../components/atoms/TextInput';
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
          placeholder="email"
          autoCompleteType={'email'}
          keyboardType={'email-address'}
          maxLength={60}
          returnKeyType={'next'}
          textContentType={'username'}
        />
        <TextInput
          placeholder="senha"
          autoCompleteType={'password'}
          maxLength={60}
          returnKeyType={'next'}
          secureTextEntry={true}
          textContentType={'newPassword'}
          passwordRules={
            'minlength: 8; maxlength: 30; required: lower; required: upper; required: digit; required: [-];'
          }
        />
        <TextInput
          placeholder="repetir senha"
          autoCompleteType={'password'}
          maxLength={60}
          returnKeyType={'send'}
          secureTextEntry={true}
        />
        <View style={styles.buttonArea}>
          <Button
            title="Cadastrar"
            onPress={() => Alert.alert('Usuário cadastrado!')}
            width="100%"
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
