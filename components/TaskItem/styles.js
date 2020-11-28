import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ffffffff',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#CCCCCC',
    shadowOpacity: 0.25,
    elevation: 3,
    padding: 5,
    marginBottom: 5,
    display: 'flex',
    margin: 10,
  },
  taskName: {
    lineHeight: 20,
    color: '#555',
    textAlign: 'justify',
    marginLeft: 10,
  },
  taskInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    margin: 5,
  },
  taskDueDate: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#6C0E23',
    fontStyle: 'italic',
    marginRight: 5,
    marginBottom: 5,
  },
});

export default styles;
