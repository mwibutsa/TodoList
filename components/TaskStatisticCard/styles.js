import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#CCCCCC',
    shadowOpacity: 0.25,
    elevation: 3,
    borderRadius: 2,
    display: 'flex',
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
    padding: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeaderTitle: {
    textTransform: 'uppercase',
    fontSize: 8,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#555',
  },
  cardValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
  },
  cardHeaderIcon: {
    width: 15,
    height: 15,
  },
});

export default styles;
