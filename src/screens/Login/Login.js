import React, {useState, useRef, useContext} from 'react';
import {View, TextInput, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import FieldErrorMessage from '../../components/atoms/FieldErrorMessage';

import If from '../../utils/if';
import {friendlyErrorMessages as errorMessages} from '../../utils/constants';
import convertStringToCamelCase from '../../utils/convertStringToCamelCase';

import {Colors} from '../../styles';
import styles from './styles';

const Login = ({navigation, handleOnLogin, handleOnGetAccounts}) => {
  const {env, setUserToken, setLoggedEmail, setAccounts, signIn} =
    useContext(ApplicationContext);

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showGenericErrorMsg, setShowGenericErrorMsg] = useState(false);
  const [genericErrorMsg, setGenericErrorMsg] = useState('');
  const [showEmailValidationMsg, setShowEmailValidationMsg] = useState(false);
  const [emailValidationMsg, setEmailValidationMsg] = useState('');
  const [showPasswordValidationMsg, setShowPasswordValidationMsg] =
    useState(false);
  const [passwordValidationMsg, setPasswordValidationMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const textInputDefaultProps = {
    style: styles.textInputOnboarding,
    placeholderTextColor: Colors.placeholderTextColor,
    autoCapitalize: 'none',
    autoCorrect: false,
  };

  const cleanUpFields = () => {
    setEmail('');
    setPassword('');
    setGenericErrorMsg('');
    setShowGenericErrorMsg(false);
    cleanUpValidations();
  };

  const cleanUpValidations = () => {
    setShowEmailValidationMsg(false);
    setShowPasswordValidationMsg(false);
  };

  const onSubmit = async () => {
    try {
      setLoading(true);

      // Requests
      const loggedInUser = await handleOnLogin(env, email, password);
      const accounts = await handleOnGetAccounts(env, loggedInUser.token);

      // Local storage
      await AsyncStorage.storeData('userToken', loggedInUser.token);
      await AsyncStorage.storeData('loggedEmail', email);
      await AsyncStorage.storeData('accounts', JSON.stringify(accounts));

      // State in application context
      setUserToken(loggedInUser.token);
      setLoggedEmail(email);
      setAccounts(accounts);

      // Screen state
      cleanUpFields();
      signIn({token: loggedInUser.token});

      console.log(
        `Usuário autenticado com sucesso. ID: ${loggedInUser.userId}.`,
      );
    } catch (e) {
      let errorMessageToDiplay;
      setShowGenericErrorMsg(true);

      switch (e.response.data.code) {
        case 400:
          errorMessageToDiplay = errorMessages.login.e400.message;
          break;
        case 401:
          errorMessageToDiplay = errorMessages.login.e401.message;
          break;
        case 404:
          errorMessageToDiplay = errorMessages.login.e404.message;
          break;
        case 422:
          errorMessageToDiplay = errorMessages.login.e422.message;
          processValidationMessages(
            e.response.data.details,
            errorMessages.login.e422.details,
          );
          break;
        case 500:
          errorMessageToDiplay = errorMessages.login.e500.message;
          break;
        default:
          errorMessageToDiplay = errorMessages.login.unknown.message;
      }
      setGenericErrorMsg(errorMessageToDiplay);
    } finally {
      setLoading(false);
    }
  };

  const processValidationMessages = (
    responseErrorDetails,
    messagesErrorDetails,
  ) => {
    cleanUpValidations();

    for (let errorDetail of responseErrorDetails) {
      let fieldName = errorDetail.path;
      let messageKey = convertStringToCamelCase(errorDetail.msg);

      if (fieldName === 'email') {
        setShowEmailValidationMsg(true);
        setEmailValidationMsg(messagesErrorDetails[fieldName][messageKey]);
      }
      if (fieldName === 'password') {
        setShowPasswordValidationMsg(true);
        setPasswordValidationMsg(messagesErrorDetails[fieldName][messageKey]);
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View style={styles.headerArea}>
        <Logo isLabelVisisble={false} size="Medium" />
      </View>
      <If test={showGenericErrorMsg}>
        <ErrorMessage message={genericErrorMsg} />
      </If>
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
          value={email}
          onChangeText={value => setEmail(value.trim())}
          {...textInputDefaultProps}
        />
        <FieldErrorMessage
          isVisible={showEmailValidationMsg}
          message={emailValidationMsg}
          style={styles.inputValidationMessage}
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
          returnKeyType={'done'}
          blurOnSubmit={false}
          value={password}
          onChangeText={setPassword}
          {...textInputDefaultProps}
        />
        <FieldErrorMessage
          isVisible={showPasswordValidationMsg}
          message={passwordValidationMsg}
          style={styles.inputValidationMessage}
        />
        <View style={styles.buttonArea}>
          <Button
            title="Entrar"
            onPress={onSubmit}
            width="100%"
            loading={loading}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
