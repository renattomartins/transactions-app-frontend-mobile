import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';

import {ApplicationContext} from '../../store';
import AsyncStorage from '../../modules/AsyncStorage';

import Button from '../../components/atoms/Button';

import styles from './styles';
import If from '../../utils/if';

const Transactions = ({navigation}) => {
  const {signOut, userToken} = useContext(ApplicationContext);

  const onSubmit = async () => {
    await AsyncStorage.cleanKeyData('userToken');
    signOut();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerArea}>
        <Text style={styles.text}>
          No futuro, você verá as transações nessa tela.
        </Text>
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
        <Button title="Voltar para o início" onPress={onSubmit} width="80%" />
      </View>
    </View>
  );
};

export default Transactions;
