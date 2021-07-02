import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import Logo from './components/atoms/Logo';
import Button from './components/atoms/Button';

const InitialScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.logoArea}>
        <Logo />
      </View>
      <View style={styles.buttonsArea}>
        <Button title="Cadastre-se" onPress={() => Alert.alert('Rá!')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#4EA8DE',
  },
  logoArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InitialScreen;
