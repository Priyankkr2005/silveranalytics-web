
import React from "react";
import { View,Text,Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header=({change})=>{

    return(
        <View style={[styles.container,{backgroundColor: change ==true ?"#2D3F73": "#4A73EB"}]}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/Frame.png')} style={styles.logoImage} />
          <Text style={styles.appName}>Silver Analytics</Text>
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>Why Silver Analytics</Text>
          <Text style={styles.menuItem}>Product</Text>
          <Text style={styles.menuItem}>Industries</Text>
          <Text style={styles.menuItem}>Company</Text>
          <TouchableOpacity style={styles.demoButton}>
            <Text style={styles.demoButtonText}>Request a Demo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
}
export default Header



