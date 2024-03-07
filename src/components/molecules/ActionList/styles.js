import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    fontSize: 24,
    paddingBottom: 10,
    color: '#888',
  },
  actionButton: {
    fontSize: 18,
    paddingVertical: 12,
    flexDirection: 'row',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  firstActionButton: {
    borderTopWidth: 0,
  },
  actionLabel: {
    paddingHorizontal: 15,
    flex: 1,
    color: '#888',
  },
  icon: {},
  iconLeft: {
    marginLeft: 5,
    color: '#ddd',
  },
  iconRight: {
    marginRight: 5,
    color: Colors.blueFour,
  },
});

export default styles;
