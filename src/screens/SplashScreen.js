import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import {Colors} from '../components/Colors'

const splashImage =  require('../assets/logo/finallogo.png')

const SplashScreen = ({navigation}) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.push("WelcomeScreen")
    }, 3000)
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: 'white'}]}>
      <Image source={splashImage} style={{width: 300, height: 300, resizeMode: 'contain'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SplashScreen