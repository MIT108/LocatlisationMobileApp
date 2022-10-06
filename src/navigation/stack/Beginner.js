import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeginnerScreen from '../../screens/BeginnerScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
}

const Authentication = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptions} initialRouteName="BeginnerScreen" >
        <Stack.Screen name="BeginnerScreen" component={BeginnerScreen} />
    </Stack.Navigator>
  )
}

export default Authentication