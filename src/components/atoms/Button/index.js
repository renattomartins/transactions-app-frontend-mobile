import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text} from 'react-native';

import styles from './styles';

const Button = ({title, onPress, ...buttonProps}) => {
  return (
    <Pressable style={styles.buttonArea} onPress={onPress} {...buttonProps}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
