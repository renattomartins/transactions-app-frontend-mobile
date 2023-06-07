import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text, ActivityIndicator} from 'react-native';

import If from '../../../utils/if';
import styles from './styles';

const Button = ({title, onPress, loading, ...buttonProps}) => {
  return (
    <>
      <Pressable style={styles.buttonArea} onPress={onPress} {...buttonProps}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
      <If test={loading}>
        <ActivityIndicator style={styles.buttonLoading} />
      </If>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
