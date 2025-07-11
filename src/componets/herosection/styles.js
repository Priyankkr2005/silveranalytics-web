import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A73EB',
    width: '100%',
    paddingHorizontal: 100,
  },
  contentContainer: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '50%',
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#ffffff',
    width: '70%',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#ffffff',
    width: '70%',
    marginTop: 20,
  },
  demoButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#60B38C',
    width: '20%',
  },
  demoButtonText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#ffffff',
  },
  noCreditCardText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#ffffff',
    marginTop: 10,
  },
  imageContainer: {
    // No need for styles here as it's mainly concerned with width and height
    // which can be controlled directly in the component
  },
});

export default styles;
