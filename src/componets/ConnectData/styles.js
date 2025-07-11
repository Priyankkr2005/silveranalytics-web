import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 100,
    marginLeft: 50,
  },
  contentContainer: {
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: '50%',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#061131',
    width: '70%',
  },
  titleHighlight: {
    color: '#4A73EB',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#061131',
    width: '70%',
    marginTop: 10,
  },
  learnMoreButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#1A8654',
    width: '20%',
    borderWidth: 1,
  },
  learnMoreButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A8654',
  },
  imageContainer: {
    width: '50%',
  },
  image: {
    width: 568,
    height: 621,
  },
});

export default styles;
