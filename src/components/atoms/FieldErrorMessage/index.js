import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import If from '../../../utils/if';

import styles from './styles';

const FormErrorMessage = ({isVisible, message, style, ...props}) => {
  return (
    <If test={isVisible}>
      <Text style={[styles.text, style]} {...props}>
        👆 {message}
      </Text>
    </If>
  );
};

FormErrorMessage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default FormErrorMessage;
