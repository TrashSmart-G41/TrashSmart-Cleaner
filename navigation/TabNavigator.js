import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/Header';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import Home from '../screens/TabNavigatorScreens/Home';
import Notifications from '../screens/TabNavigatorScreens/Notifications';
import Collections from '../screens/TabNavigatorScreens/Collections';
import MapScreen from '../screens/TabNavigatorScreens/Map';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            padding: 8,
            height: 64,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 8,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Collections') {
              iconName = focused ? 'trash-bin' : 'trash-bin-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Collections" component={Collections} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </>
  )
}

export default TabNavigator;