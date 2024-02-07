import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';

// Custom Heading Component
export const CustomHeading = ({ text, color, marginTop }) => (
  <Text style={[styles.heading, { color, marginTop }]}>{text}</Text>
);

// Custom Subheading Component
export const CustomSubheading = ({ text, color, marginTop }) => (
  <Text style={[styles.subHeading, { color, marginTop }]}>{text}</Text>
);

// Custom AddButton Component
export const CustomAddButton = ({ onPress }) => (
  <TouchableOpacity style={styles.addButton} onPress={onPress}>
    <MaterialIcons name="add" size={wp('8%')} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: wp('40%'),
      height: hp('20%'),
      resizeMode: 'contain',
    },
    heading: {
      fontSize: wp('6%'),
      fontWeight: 'bold',
    },
    subHeading: {
      fontSize: wp('4%'),
    },
    addButton: {
      backgroundColor: 'green',
      borderRadius: 50,
      padding: wp('4%'),
      marginTop: hp('2%'),
    },
  });