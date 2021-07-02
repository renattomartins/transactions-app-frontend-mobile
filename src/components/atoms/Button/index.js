import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text} from 'react-native';

import styles from './styles';

const Button = props => {
  return (
    <Pressable style={styles.buttonArea} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
