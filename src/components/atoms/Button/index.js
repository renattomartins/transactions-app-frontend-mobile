import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text, ActivityIndicator} from 'react-native';

import If from '../../../utils/if';
import styles from './styles';

const Button = ({
  title,
  onPress,
  loading,
  withMargin,
  inverse,
  style,
  ...buttonProps
}) => {
  return (
    <>
      <Pressable
        style={[
          styles.buttonArea,
          withMargin ? styles.buttonAreaMargin : null,
          inverse ? styles.buttonInverse : null,
          style,
        ]}
        onPress={onPress}
        {...buttonProps}>
        <Text style={[styles.buttonText, inverse ? styles.textInverse : null]}>
          {title}
        </Text>
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
