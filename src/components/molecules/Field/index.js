import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import If from '../../../utils/if';
import styles from './styles';

const Field = ({children, label, ...props}) => {
  return (
    <View style={[styles.fieldWrapper, props.style]}>
      <If test={label}>
        <Text>{label}</Text>
      </If>
      {children}
    </View>
  );
};

Field.propTypes = {
  label: PropTypes.string,
};

export default Field;
