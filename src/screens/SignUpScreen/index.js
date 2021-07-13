import React, {useRef} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import {Colors} from '../../styles';
import styles from './styles';

const SignUpScreen = props => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const textInputDefaultProps = {
    style: styles.textInputOnboarding,
    placeholderTextColor: Colors.placeholderTextColor,
    autoCapitalize: 'none',
    autoCorrect: false,
  };

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View style={styles.headerArea}>
        <Logo isLabelVisisble={false} size="Medium" />
      </View>
      <View style={styles.inputsArea}>
        <TextInput
          placeholder="email"
          autoCompleteType={'email'}
          keyboardType={'email-address'}
          maxLength={60}
          textContentType={'username'}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          blurOnSubmit={false}
          {...textInputDefaultProps}
        />
        <TextInput
          ref={passwordRef}
          placeholder="senha"
          autoCompleteType={'password'}
          maxLength={60}
          secureTextEntry={true}
          textContentType={'newPassword'}
          passwordRules={
            'minlength: 8; maxlength: 30; required: lower; required: upper; required: digit; required: [-];'
          }
          returnKeyType={'next'}
          onSubmitEditing={() => {
            confirmPasswordRef.current.focus();
          }}
          blurOnSubmit={false}
          {...textInputDefaultProps}
        />
        <TextInput
          ref={confirmPasswordRef}
          placeholder="repetir senha"
          autoCompleteType={'password'}
          maxLength={60}
          secureTextEntry={true}
          returnKeyType={'send'}
          {...textInputDefaultProps}
        />
        <View style={styles.buttonArea}>
          <Button
            title="Cadastrar"
            onPress={() => Alert.alert('Usuário cadastrado!')}
            width="100%"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
