import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/logo.png')}
      />
      <Text style={styles.label}>Transactions App</Text>
    </View>
  );
};

export default Logo;
