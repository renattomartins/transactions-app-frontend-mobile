import React from 'react';
import {Text, View, StyleSheet, Pressable, Alert} from 'react-native';
import Logo from './components/atoms/Logo';

const InitialScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.logoArea}>
        <Logo />
      </View>
      <View style={styles.buttonsArea}>
        <Pressable
          style={styles.signupButton}
          onPress={() => Alert.alert('Cadastra-se')}>
          <Text style={styles.signupButtonText}>Cadastre-se</Text>
        </Pressable>
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
  signupButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
  },
  signupButtonText: {
    color: '#4EA8DE',
  },
});

export default InitialScreen;
