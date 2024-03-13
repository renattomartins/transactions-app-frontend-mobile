import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import If from '../../../utils/if';

import styles from './styles';

const FormErrorMessage = ({isVisible, message, style, textStyle, ...props}) => {
  return (
    <If test={isVisible}>
      <View style={[styles.wrapper, style]}>
        <Text style={[styles.text, textStyle]}>{message}</Text>
      </View>
    </If>
  );
};

FormErrorMessage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default FormErrorMessage;
