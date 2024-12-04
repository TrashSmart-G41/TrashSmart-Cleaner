import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export default function RootNavigator() {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return ( 
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                {userToken !== null ? <AppStack /> : <AuthStack />}
            </SafeAreaView>
        </NavigationContainer>
    );
}
