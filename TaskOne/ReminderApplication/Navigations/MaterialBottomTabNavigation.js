import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// Importing Screens
import HomeScreen from '../Screens/HomeScreen';
import SettingScreen from '../Screens/SettingsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';
// Importing Custom Buttons
import { CustomTabbarButton } from '../CustomComponents/CustomTabBarButton';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          elevation: 10,
          height: hp('10%'), 
        },
        tabBarLabelStyle: {
          fontSize: wp('3%'), 
        },
        tabBarActiveTintColor: '#36175E',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'#36175E'} size={wp('8%')} /> 
          ),
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={wp('8%')} />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="plus"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTabbarButton {...props} />,
          tabBarIcon: () => (
            <Image
              source={require('../assets/Logo.png')}
              style={{ width: wp('10%'), height: hp('8%') }} 
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={wp('8%')} />
          ),
          headerShown: false,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={wp('8%')} />
          ),
          headerShown: false,
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}
