// TopTabNavigation.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// Importing Screens
import DrinkWaterReminderScreen from '../Screens/RemindersScreen/DrinkWaterReminder';
import ExcerciseReminderScreen from '../Screens/RemindersScreen/ExcerciseReminder';
import SleepMonitorScreen from '../Screens/RemindersScreen/SleepMonitor';
const Tab = createMaterialTopTabNavigator();
export default function TopTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginTop: hp('3.5%'), 
          backgroundColor: '#55A605',
        
        },
        tabBarLabelStyle: {
          fontSize: wp('2.8%'), 
          color: 'white'
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
       
      }}
    >
      <Tab.Screen name="Drink Water" component={DrinkWaterReminderScreen}  />
      <Tab.Screen name="Exercise Reminder" component={ExcerciseReminderScreen} />
      <Tab.Screen name="Sleep Monitor" component={SleepMonitorScreen} />
    </Tab.Navigator>
  );
}
