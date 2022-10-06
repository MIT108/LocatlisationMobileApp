import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";

import BeginnerScreen from '../../BeginnerScreen'
import SettingScreen from "../SettingScreen";
import BeginnerLearnScreen from "../../learning/beginner/BeginnerLearnScreen";

const Drawer = createDrawerNavigator();


const screenOptions = {
  headerShown: false,
}

const Drawers = ({initNavigation, navigation}) => {
  return (
    <>
        <Drawer.Navigator 
        useLegacyImplementation={true}
        drawerContent={props => <DrawerContent {...props} initNavigation={initNavigation} navigation={navigation} />}
        drawerActiveTintColor="07338C"
        >
            <Drawer.Screen name="Home" component={BeginnerLearnScreen}   screenOptions={screenOptions}/>
            <Drawer.Screen name="SettingScreen" component={SettingScreen}  />
        </Drawer.Navigator>
    </>

  );
}

export default Drawers;