import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const Logo = props => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={[styles.img, styles[props.size]]}
        source={require('../../../assets/images/logo-1024x1024.png')}
      />
      {props.isLabelVisisble && (
        <Text style={styles.label}>TransactionsApp</Text>
      )}
    </View>
  );
};

Logo.propTypes = {
  isLabelVisisble: PropTypes.bool,
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
};

Logo.defaultProps = {
  isLabelVisisble: true,
  size: 'Large',
};

export default Logo;
