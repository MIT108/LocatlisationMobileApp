import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import NavigationStacks from "./NavigationStack"


const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false,
}
export default function Navigation(){
    return (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="NavigationStacks" component={NavigationStacks} />
        </Stack.Navigator>
      )
  }