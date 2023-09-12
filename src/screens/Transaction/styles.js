import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  inputsArea: {
    padding: 20,
  },
  buttonsArea: {
    padding: 20,
  },
  textInputWrapper: {
    paddingVertical: 10,
  },
  textInput: {
    height: 40,
    marginTop: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  amountWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountInput: {
    color: Colors.blueSix,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    width: 200,
  },
  isIncomeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  isIncomeLabel: {
    paddingBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  isIncomeLabelFragments: {},
  in: {
    fontWeight: 'bold',
  },
  out: {
    fontWeight: 'bold',
  },
  isIncomeInput: {},
  descriptiontInput: {},
  dateInput: {},
  notesInput: {
    height: 80,
  },
});

export default styles;
