import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
    </View>
  );
};

export default SplashScreen;
