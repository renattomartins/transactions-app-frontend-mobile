import React, {useState, useRef} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import {Colors} from '../../styles';
import styles from './styles';

const SignUp = ({props, handleOnSubmit}) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const textInputDefaultProps = {
    style: styles.textInputOnboarding,
    placeholderTextColor: Colors.placeholderTextColor,
    autoCapitalize: 'none',
    autoCorrect: false,
  };

  const onSubmit = async () => {
    try {
      // @todo
      // get env
      // make simple local validations
      // set loader? (and similar)
      const env = 'local';
      await handleOnSubmit(env, email, password, confirmPassword);
    } catch (e) {
      // Make a small error global area to display error
      // Make small error areas for each field
      // Think about error logging instead alert to better debugging
      Alert.alert('Falha na criação do novo usuário: ' + e);
    }

    // Clean up field's value and error messages on submit (error or success)

    // Screen states:
    // - Initial (empty)
    // - Filled
    // - Loading (disabled fields and button)
    // - Generic error
    // - Field error
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
          onChangeText={value => setEmail(value.trim())}
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
          onChangeText={setPassword}
          {...textInputDefaultProps}
        />
        <TextInput
          ref={confirmPasswordRef}
          placeholder="repetir senha"
          autoCompleteType={'password'}
          maxLength={60}
          secureTextEntry={true}
          returnKeyType={'send'}
          onChangeText={setConfirmPassword}
          {...textInputDefaultProps}
        />
        <View style={styles.buttonArea}>
          <Button title="Cadastrar" onPress={onSubmit} width="100%" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
