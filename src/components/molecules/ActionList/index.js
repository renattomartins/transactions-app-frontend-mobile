import React from 'react';
import propTypes from 'prop-types';
import {Pressable, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './styles';

const ActionList = ({actionList, ...props}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Ações</Text>
      {actionList.map((action, index) => (
        <Pressable
          key={index}
          style={[
            styles.actionButton,
            index === 0 ? styles.firstActionButton : '',
          ]}
          onPress={action.onPress}>
          <Icon
            name={action.icon}
            style={[styles.icon, styles.iconLeft]}
            size={15}
          />
          <Text style={styles.actionLabel}>{action.text}</Text>
          <Icon
            name="angle-right"
            style={[styles.icon, styles.iconRight]}
            size={15}
          />
        </Pressable>
      ))}
    </View>
  );
};

ActionList.propTypes = {
  actionList: propTypes.array.isRequired,
};

export default ActionList;
