import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

const styles = StyleSheet.create({
  floatButtonArea: {
    backgroundColor: Colors.blueEight,
    width: 60,
    height: 60,
    padding: 10,
    paddingTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    position: 'absolute',
    right: 20,
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  floatButtonText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default styles;
