import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF6201',
    width: '100%',
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    paddingLeft: 10,
    position: 'relative',
    marginBottom: 50,
  },
  brand: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: 10,
    color: '#ffffffff',
    fontSize: 30,
    fontWeight: '600',
  },
  taskStatistics: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: 60,
    transform: [{ translateY: 30 }],
    width: '100%',
  },
});

export default styles;
