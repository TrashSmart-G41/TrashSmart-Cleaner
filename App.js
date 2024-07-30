import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetStarted from './screens/AuthStack/GetStarted';
import SignUpPhone from './screens/AuthStack/SignUpPhone';
import ConfirmPhone from './screens/AuthStack/ConfirmPhone';
import Success from './screens/AuthStack/Success';
import Details from './screens/AuthStack/Details';
import Address from './screens/AuthStack/Address';
import ProfilePhoto from './screens/AuthStack/ProfilePhoto';
import Notifications from './screens/AuthStack/Notifications';
import DrawerNavigator from './components/DrawerNavigator';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className='flex-1 bg-white'>
        <Stack.Navigator screenOptions={ {headerShown: false} } initialRouteName="HomeScreen">
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
          <Stack.Screen name="ConfirmPhone" component={ConfirmPhone} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
