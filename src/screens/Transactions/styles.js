import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.blueFive,
  },
  headerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainArea: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  text: {
    color: '#fff',
    padding: 20,
  },
});

export default styles;
