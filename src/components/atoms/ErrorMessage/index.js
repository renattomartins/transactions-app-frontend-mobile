import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const ErrorMessage = ({message, style, textStyle, ...props}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </View>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
