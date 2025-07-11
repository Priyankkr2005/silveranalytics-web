import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import styles from styles.js

const ConnectData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Connect data from <Text style={styles.titleHighlight}>anywhere</Text>
          </Text>
          <Text style={styles.subTitle}>
            It is easier to understand your customers when you have many components with different functions that you can use for maximizing your profits.
          </Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreButtonText}>Learn more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/dor.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default ConnectData;
