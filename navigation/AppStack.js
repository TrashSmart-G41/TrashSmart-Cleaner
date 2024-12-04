import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
