import React from 'react';
import PropTypes from 'prop-types';
import {View, Pressable, Text, ActivityIndicator} from 'react-native';

import If from '../../../utils/if';
import styles from './styles';

const Button = ({
  title,
  onPress,
  loading,
  withMargin,
  inverse,
  wrapStyle,
  style,
  textStyle,
  ...buttonProps
}) => {
  return (
    <View style={[wrapStyle]}>
      <Pressable
        style={[
          styles.buttonArea,
          withMargin ? styles.buttonAreaMargin : null,
          inverse ? styles.buttonInverse : null,
          style,
        ]}
        onPress={onPress}
        {...buttonProps}>
        <Text
          style={[
            styles.buttonText,
            inverse ? styles.textInverse : null,
            textStyle,
          ]}>
          {title}
        </Text>
      </Pressable>
      <If test={loading}>
        <ActivityIndicator
          size="small"
          color="#fff"
          style={styles.buttonLoading}
        />
      </If>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
