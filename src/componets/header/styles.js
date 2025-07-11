import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3F73',
    width: '100%',
    paddingHorizontal: 100,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    height: 38,
    width: 38,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#ffffff',
    marginLeft: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff',
    marginHorizontal: 30,
  },
  demoButton: {
    borderColor: '#D1D7E6',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 30,
  },
  demoButtonText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#ffffff',
  },
});

export default styles;
