import React, {useState, useRef, useContext} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {ApplicationContext} from '../../store';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import If from '../../utils/if';

import {Colors} from '../../styles';
import styles from './styles';

const SignUp = ({navigation, handleOnSubmit}) => {
  const {env} = useContext(ApplicationContext);

  const passwordRef = useRef();
  const passwordVerificationRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [genericErrorMsg, setGenericErrorMsg] = useState('');
  const [showGenericErrorMsg, setShowGenericErrorMsg] = useState(false);

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
    //@todo Also clean error msgs
    setGenericErrorMsg('');
    setShowGenericErrorMsg(false);
  };

  const onSubmit = async () => {
    try {
      // @todo
      // make simple local validations
      // set loader? (and similar)
      const registeredUser = await handleOnSubmit(
        env,
        email,
        password,
        passwordVerification,
      );

      cleanUpFields();
      navigation.navigate('Transactions');
      // @todo Remove this Alert after authentication implementation
      Alert.alert(
        `Novo usuário cadastro com sucesso. ID: ${registeredUser.id}, Email: ${registeredUser.email}, Data de criação: ${registeredUser.createdAt}`,
      );
    } catch (e) {
      let errorMessageToDiplay;
      setShowGenericErrorMsg(true);
      switch (e.response.data.code) {
        case 400:
          errorMessageToDiplay =
            'Erro no aplicativo. Verifique se ele está atualizado.';
          break;
        case 409:
          errorMessageToDiplay = 'Email já existente';
          break;
        case 422:
          errorMessageToDiplay = 'Verifique os campos abaixo';
          break;
        case 500:
          errorMessageToDiplay =
            'Erro interno no servidor. Aguarde alguns instantes e tente novamente.';
          break;
        default:
          errorMessageToDiplay =
            'Erro desconhecido. Por favor, tente novamente.';
      }
      // @todo
      // Make small error areas for each field
      // Think about error logging instead alert to better debugging
      setGenericErrorMsg(errorMessageToDiplay);
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
        <If test={showGenericErrorMsg}>
          <Text style={styles.inputValidationMessage}>
            👆 campo obrigatório
          </Text>
        </If>
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
        <If test={showGenericErrorMsg}>
          <Text style={styles.inputValidationMessage}>
            👆 campo obrigatório
          </Text>
        </If>
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
        <If test={showGenericErrorMsg}>
          <Text style={styles.inputValidationMessage}>
            👆 campo obrigatório
          </Text>
        </If>
        <View style={styles.buttonArea}>
          <Button title="Cadastrar" onPress={onSubmit} width="100%" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
