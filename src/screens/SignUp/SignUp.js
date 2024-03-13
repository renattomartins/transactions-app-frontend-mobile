import React, {useState, useRef, useContext} from 'react';
import {View, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';
import FormErrorMessage from '../../components/atoms/FormErrorMessage';
import FieldErrorMessage from '../../components/atoms/FieldErrorMessage';

import {friendlyErrorMessages as errorMessages} from '../../utils/constants';
import convertStringToCamelCase from '../../utils/convertStringToCamelCase';

import {Colors} from '../../styles';
import styles from './styles';

const SignUp = ({
  navigation,
  handleOnSubmit,
  handleOnLogin,
  handleOnGetAccounts,
}) => {
  const {env, setUserToken, setLoggedEmail, setAccounts, signUp} =
    useContext(ApplicationContext);

  const passwordRef = useRef();
  const passwordVerificationRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');

  const [showGenericErrorMsg, setShowGenericErrorMsg] = useState(false);
  const [genericErrorMsg, setGenericErrorMsg] = useState('');
  const [showEmailValidationMsg, setShowEmailValidationMsg] = useState(false);
  const [emailValidationMsg, setEmailValidationMsg] = useState('');
  const [showPasswordValidationMsg, setShowPasswordValidationMsg] =
    useState(false);
  const [passwordValidationMsg, setPasswordValidationMsg] = useState('');
  const [
    showPasswordVerificationValidationMsg,
    setShowPasswordVerificationValidationMsg,
  ] = useState(false);
  const [
    passwordVerificationValidationMsg,
    setPasswordVerificationValidationMsg,
  ] = useState('');
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
    setPasswordVerification('');
    setGenericErrorMsg('');
    setShowGenericErrorMsg(false);
    cleanUpValidations();
  };

  const cleanUpValidations = () => {
    setShowEmailValidationMsg(false);
    setShowPasswordValidationMsg(false);
    setShowPasswordVerificationValidationMsg(false);
  };

  const onSubmit = async () => {
    try {
      setLoading(true);

      // Requests
      const registeredUser = await handleOnSubmit(
        env,
        email,
        password,
        passwordVerification,
      );
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
      signUp({token: loggedInUser.token});

      console.log(
        `Novo usuário cadastro com sucesso. ID: ${registeredUser.id}, Email: ${registeredUser.email}, Data de criação: ${registeredUser.createdAt}`,
      );
    } catch (e) {
      let errorMessageToDiplay;
      setShowGenericErrorMsg(true);

      switch (e.response.data.code) {
        case 400:
          errorMessageToDiplay = errorMessages.signup.e400.message;
          break;
        case 409:
          errorMessageToDiplay = errorMessages.signup.e409.message;
          processValidationMessages(
            e.response.data.details,
            errorMessages.signup.e409.details,
          );
          break;
        case 422:
          errorMessageToDiplay = errorMessages.signup.e422.message;
          processValidationMessages(
            e.response.data.details,
            errorMessages.signup.e422.details,
          );
          break;
        case 500:
          errorMessageToDiplay = errorMessages.signup.e500.message;
          break;
        default:
          errorMessageToDiplay = errorMessages.signup.unknown.message;
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
      if (fieldName === 'passwordVerification') {
        setShowPasswordVerificationValidationMsg(true);
        setPasswordVerificationValidationMsg(
          messagesErrorDetails[fieldName][messageKey],
        );
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.main}>
      <View style={styles.headerArea}>
        <Logo isLabelVisisble={false} size="Medium" />
      </View>
      <FormErrorMessage
        isVisible={showGenericErrorMsg}
        message={genericErrorMsg}
      />
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
          returnKeyType={'next'}
          onSubmitEditing={() => {
            passwordVerificationRef.current.focus();
          }}
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
        <TextInput
          ref={passwordVerificationRef}
          placeholder="repetir senha"
          autoCompleteType={'password'}
          maxLength={60}
          secureTextEntry={true}
          returnKeyType={'done'}
          value={passwordVerification}
          onChangeText={setPasswordVerification}
          {...textInputDefaultProps}
        />
        <FieldErrorMessage
          isVisible={showPasswordVerificationValidationMsg}
          message={passwordVerificationValidationMsg}
          style={styles.inputValidationMessage}
        />
        <View style={styles.buttonArea}>
          <Button
            title="Cadastrar"
            onPress={onSubmit}
            width="100%"
            loading={loading}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
