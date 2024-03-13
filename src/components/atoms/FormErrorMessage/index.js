import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const FormErrorMessage = ({message, style, textStyle, ...props}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </View>
  );
};

FormErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormErrorMessage;
