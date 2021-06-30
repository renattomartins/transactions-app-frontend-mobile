import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

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
  const [count, setCount] = useState(0);

  return (
    <View style={styles.center}>
      <Logo />
      <Greeting name="Renato" />
      <Text>Você clicou no botão {count} vezes.</Text>
      <Button onPress={() => setCount(count + 1)} title="Cadastre-se" />
    </View>
  );
};

export default HelloTransactionApp;
