import React from 'react';
import {Text, View, StyleSheet, Pressable, Image, Alert} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image
        style={styles.logoImg}
        source={require('./assets/images/logo.png')}
      />
      <Text style={styles.title}>Transactions App</Text>
    </View>
  );
};

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
  logoWrapper: {
    alignItems: 'center',
  },
  logoImg: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
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
