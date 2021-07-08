import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const Button = ({...inputProps}) => {
  return (
    <View style={styles.textInputWrapper}>
      <TextInput
        style={styles.textInputOnboarding}
        placeholderTextColor={'#91C8EB'}
        autoCapitalize={'none'}
        autoCorrect={false}
        {...inputProps}
      />
    </View>
  );
};

export default Button;
