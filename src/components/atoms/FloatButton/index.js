import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text} from 'react-native';

import styles from './styles';

const FloatButton = ({onPress, ...floatButtonProps}) => {
  return (
    <>
      <Pressable
        style={[styles.floatButtonArea]}
        onPress={onPress}
        {...floatButtonProps}>
        <Text style={[styles.floatButtonText]}>+</Text>
      </Pressable>
    </>
  );
};

FloatButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FloatButton;
