import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BeginnerLearnScreen from './learning/beginner/BeginnerLearnScreen'
import BeginnerExerciseScreen from './learning/beginner/BeginnerExerciseScreen'
import ChatScreen from './common/ChatScreen'
import ProfileScreen from './common/ProfileScreen'

import Chat from '../assets/icon/chat.png'
import Exercise from '../assets/icon/exercise.png'
import Learn from '../assets/icon/learn.png'
import Profile from '../assets/icon/profile.png'
import { Colors } from '../components/Colors';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{ 
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#07338C',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 10
     }}
     onPress={onPress}
  >
    <View style={{ 
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor: PrimaryColorOne
     }}>
      {children}
    </View>
  </TouchableOpacity>
)


const screenOptions = {
  headerShown: false,
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      height: 60,
      shadowColor: '#07338C',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 10
    }
  ]
}


const BeginnerScreen = ({navigation}) => {
  return (
    <>
    <Tab.Navigator
       screenOptions={screenOptions}
    >
      <Tab.Screen name="BeginnerLearnScreen" component={BeginnerLearnScreen} 
      options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Learn}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? Colors.background.primaryColor : '#748c94'
               }}
            />
            <Text style={{ color: focused ? Colors.background.primaryColor : '#748c94', fontSize: 12 }} >Learn</Text>
          </View>
        )
       }} />
      <Tab.Screen name="BeginnerExerciseScreen" component={BeginnerExerciseScreen} 
        options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Exercise}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? Colors.background.primaryColor : '#748c94'
               }}
            />
            <Text style={{ color: focused ? Colors.background.primaryColor : '#748c94', fontSize: 12 }} >Exercise</Text>
          </View>
        )
       }}
      />
      <Tab.Screen name="ChatScreen" component={ChatScreen} 
        options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Chat}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? Colors.background.primaryColor : '#748c94'
               }}
            />
            <Text style={{ color: focused ? Colors.background.primaryColor : '#748c94', fontSize: 12 }} >Chat</Text>
          </View>
        )
       }}
      />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
        options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Profile}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? Colors.background.primaryColor : '#748c94'
               }}
            />
            <Text style={{ color: focused ? Colors.background.primaryColor : '#748c94', fontSize: 12 }} >Profile</Text>
          </View>
        )
       }}
      />
    </Tab.Navigator>
    </>
  )
}

export default BeginnerScreen

const styles = StyleSheet.create({})