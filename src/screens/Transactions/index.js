import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import Button from '../../components/atoms/Button';

import styles from './styles';
import If from '../../utils/if';

const Transactions = ({navigation}) => {
  const {signOut, userToken, loggedEmail, setLoggedEmail} =
    useContext(ApplicationContext);

  const onSubmit = async () => {
    await AsyncStorage.cleanKeyData('userToken');
    setLoggedEmail(null);
    signOut();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerArea}>
        <View style={styles.logoutText}>
          <Text style={styles.text}>Você está logado como: {loggedEmail}</Text>
        </View>
        <View style={styles.logoutButton}>
          <Button title="Sair" onPress={onSubmit} inverse />
        </View>
      </View>
      <View style={styles.mainArea}>
        <If test={userToken !== null}>
          <TextInput
            style={styles.textArea}
            editable={false}
            multiline={true}
            numberOfLines={10}
            value={userToken}
            onFocus={e => e.target.select()}
          />
        </If>
      </View>
    </View>
  );
};

export default Transactions;
