import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import styles from styles.js

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Helping Business better understand their customers
          </Text>
          <Text style={styles.subTitle}>
            It is easier to understand your customers when you have many components with different functions
          </Text>
          <TouchableOpacity style={styles.demoButton}>
            <Text style={styles.demoButtonText}>Request a Demo</Text>
          </TouchableOpacity>
          <Text style={styles.noCreditCardText}>
            No credit card required
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/teac.png')}
            style={{ width: 700, height: 580, marginTop: -100 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default YourComponent;

