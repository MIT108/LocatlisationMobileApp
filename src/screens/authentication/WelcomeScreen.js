import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PrimaryButtonDark from '../../components/buttons/PrimaryButtonDark'
import SecondaryButtonLight from '../../components/buttons/SecondaryButtonLight'
import { Colors } from '../../components/Colors'

const Images = require('../../assets/images/welcome.png')

const WelcomeScreen = ({navigation}) => {
    const goToLogin = () => {
        navigation.push('LoginScreen')
    }
    const goToGetStart = () => {
        navigation.push('SpyScreen')
    }

  return (
    <View style={[styles.container, {backgroundColor: Colors.background.secondaryColor}]}>
      <View style={styles.imageContainer}>
        <Image source={Images} style={{ width: 300, height: 300 }}/>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bienvenue à l'application LocObject</Text>
      </View>
      <View>
        <PrimaryButtonDark text="Authentifier" onClickHandler={goToLogin}/>
        <SecondaryButtonLight text="Espionner" onClickHandler={goToGetStart} />
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    imageContainer: {
      margin: 40,
      marginTop: 70,
      height: '50%',
      backgroundColor: '#dfe3da',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30
    },
    welcome: {
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }, 
    welcomeText: {
        color: Colors.text.primaryColor,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    skip:{
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    }
})