import React from 'react';
import {View} from 'react-native';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import styles from './styles';

const InitialScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.logoArea}>
        <Logo />
      </View>
      <View style={styles.buttonsArea}>
        <Button
          title="Cadastre-se"
          onPress={() => navigation.navigate('SignUp')}
          withMargin
        />
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('SignUp')}
          withMargin
          inverse
        />
      </View>
    </View>
  );
};

export default InitialScreen;
