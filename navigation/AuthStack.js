import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/AuthStack/GetStarted';
import LoginEmail from '../screens/AuthStack/LoginEmail';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="LoginEmail" component={LoginEmail} />
    </Stack.Navigator>
  );
}
