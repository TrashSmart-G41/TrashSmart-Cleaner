import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Completed from '../CollectionsTopNavigator/Completed';
import New from '../CollectionsTopNavigator/New';

const Tab = createMaterialTopTabNavigator();

const Collections = () => {
  return (
    <View className='flex-1 px-6 bg-white'>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            height: 2,
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        })}
      >
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
    </View>
  );
};

export default Collections