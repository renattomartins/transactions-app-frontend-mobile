import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({
  buttonArea: {
    backgroundColor: '#ffffff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.blueFive,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  buttonLoading: {
    backgroundColor: 'rgba(78, 168, 222, 0.6)',
    padding: 15,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
  },
});

export default styles;
