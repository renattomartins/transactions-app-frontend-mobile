import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Logo = () => {
  return <Text>Transactions App</Text>;
};

const Greeting = props => {
  return (
    <View>
      <Text>Olá, {props.name}!</Text>
    </View>
  );
};

const HelloTransactionApp = () => {
  return (
    <View style={styles.center}>
      <Logo />
      <Greeting name="Renato" />
    </View>
  );
};

export default HelloTransactionApp;
