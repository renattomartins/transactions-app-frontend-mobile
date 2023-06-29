import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import Logo from '../../components/atoms/Logo';
import Button from '../../components/atoms/Button';

import If from '../../utils/if';
import styles from './styles';

const InitialScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.main}>
      <If test={loading}>
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      </If>
      <If test={!loading}>
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
            onPress={() => navigation.navigate('Login')}
            withMargin
            inverse
          />
        </View>
      </If>
    </View>
  );
};

export default InitialScreen;
