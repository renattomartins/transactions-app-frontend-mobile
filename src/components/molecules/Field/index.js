import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Field = ({children, ...props}) => {
  return <View style={[styles.fieldWrapper, props.style]}>{children}</View>;
};

export default Field;
