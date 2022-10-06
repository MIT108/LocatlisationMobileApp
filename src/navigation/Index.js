
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { AppContext } from '../context/AppContext';
import Authentication from './stack/Authentication';
import HomeSpyScreen from '../screens/learning/spy/HomeSpyScreen'


// import School from './drawer/School'
import Stack from './stack/Stack';


const Stacks = createNativeStackNavigator()


const screenOptions = {
    headerShown: false,
}
const Index = () => {

  return (
    <AppContext.Consumer>
      {({storedInformation}) => (
        <Stacks.Navigator  screenOptions={screenOptions} >
        {
          storedInformation ? (
            <>
            {
              storedInformation.type == 0 ? ( 
                <>
                <Stacks.Screen name="Stack" component={Stack} />
                </>
              ) : ( 
                <>
                <Stacks.Screen name="HomeSpyScreen" component={HomeSpyScreen} />                  
                </>
              )
            }
            </>
          ) : ( 
            <>
            <Stacks.Screen name="Authentication" component={Authentication} />
            </>
          )
        }
        </Stacks.Navigator>
      )}
    </AppContext.Consumer>
  );
}


export default Index