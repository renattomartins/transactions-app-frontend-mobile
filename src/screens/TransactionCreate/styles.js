import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  inputsArea: {
    padding: 20,
  },
  errorMessage: {
    marginHorizontal: 0,
  },
  inputValidationMessage: {
    marginTop: 5,
    color: Colors.negative,
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
  dateInputAggregate: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  dateInput: {
    width: 145,
    opacity: 1,
    padding: 6,
    marginTop: 5,
    marginRight: 5,
    backgroundColor: '#dedcdc',
    borderWidth: 0,
    borderRadius: 6,
  },
  dateInputText: {
    color: '#222521',
  },
  dateInputTextSelected: {
    color: '#4983DB',
  },
  notesInput: {
    height: 80,
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  wrapSaveButton: {
    marginBottom: 15,
  },
  saveButton: {
    borderWidth: 0,
  },
  cancelButton: {},
});

export default styles;
