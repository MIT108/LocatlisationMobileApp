import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { AppContext } from './src/context/AppContext' 
import AppLoading from 'expo-app-loading';
import { getVariable } from './src/services/AsyncStorageMethods';
import Index from './src/navigation/Index'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false,
}

export default function NavigationStacks(){
  
  const [authReady , setAuthReady] = useState(false);
  const [storedInformation, setStoredInformation] = useState("")
  
  const checkAuthenticationStatus = async () => {
        
      const userInfo = await getVariable("locationUserInfo")
      if(userInfo !== null && userInfo !== null){
        setStoredInformation(userInfo)
        console.log("userInfo", userInfo)
      }else{
        setStoredInformation(null)
      }
  }

  
  if(!authReady){
    return (
        <AppLoading 
            startAsync={checkAuthenticationStatus}
            onFinish={() => setAuthReady(true)}
            onError={(error) => console.log(error)}
        />
      )
  }

  return (
    <AppContext.Provider value={{ storedInformation, setStoredInformation }}>
      <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </AppContext.Provider>
    )
}