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
  containerAmountInput: {
    padding: 8,
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    width: 230,
  },
  amountInput: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
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
    textAlignVertical: 'top',
  },
  saveButton: {
    marginBottom: 15,
    borderWidth: 0,
  },
  cancelButton: {},
});

export default styles;
