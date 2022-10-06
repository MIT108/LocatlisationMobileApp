import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import GetStartScreen from '../../screens/authentication';
import LoginScreen from '../../screens/authentication/LoginScreen';
import RegisterScreen from '../../screens/authentication/RegisterScreen';
import WelcomeScreen from '../../screens/authentication/WelcomeScreen';
import SplashScreen from '../../screens/SplashScreen'
import SpyScreen from '../../screens/authentication/SpyScreen'

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
}

const Authentication = () => { 

  return (
    <Stack.Navigator  screenOptions={screenOptions} initialRouteName="SplashScreen" >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SpyScreen" component={SpyScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default Authentication