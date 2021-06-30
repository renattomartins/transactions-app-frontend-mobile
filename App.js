import React from 'react';
import {Text, View} from 'react-native';

const HelloTransactionApp = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Transactions App</Text>
    </View>
  );
};
export default HelloTransactionApp;
