
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Authentication from './Authentication'
import Beginner from './Beginner'
import Drawers from '../../screens/common/drawer/Drawers'

const Stacks = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}

const Stack = () => {
    return(
        <Stacks.Navigator screenOptions={screenOptions} useLegacyImplementation={true}>
            <Stacks.Screen name="Drawers" component={Drawers} />
            {/* <Stacks.Screen name="Beginner" component={Beginner} /> */}
        </Stacks.Navigator>
    )
}
export default Stack;