import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import styles from './styles';
import {ApplicationContext} from '../../contexts/ApplicationContext';
import If from '../../utils/if';

const InitialScreen = ({navigation}) => {
  const {env} = useContext(ApplicationContext);

  return (
    <View style={styles.main}>
      <View style={styles.logoArea}>
        <Logo />
        <If test={env !== 'prd'}>
          <Text style={styles.text}>({env})</Text>
        </If>
      </View>
      <View style={styles.buttonsArea}>
        <Button
          title="Cadastre-se"
          onPress={() => navigation.navigate('SignUp')}
          withMargin
        />
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Login')}
          withMargin
          inverse
        />
      </View>
    </View>
  );
};

export default InitialScreen;
