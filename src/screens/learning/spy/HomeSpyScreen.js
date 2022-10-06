import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useAppState } from '@react-native-community/hooks'
import {AppContext} from '../../../context/AppContext'
import spyService from '../../../api/spyService'
import {CurrentLocation} from '../beginner/CurrentLocation'
import { setVariable } from '../../../services/AsyncStorageMethods'

const splashImage =  require('../../../assets/logo/finallogo.png')

const HomeSpyScreen = ({navigation}) => {
  const { storedInformation, setStoredInformation } = useContext(AppContext);
  const [position, setPosition] = useState(storedInformation.position)
  
  useEffect(() => {
    setInterval(() => {
        CurrentLocation().then((response) => {
            if (response.coords.longitude == position.longitude && response.coords.latitude == position.latitude) {
                // console.log("the same")
            }else{
                storedInformation.address = response.address[0]
                var temPosition = {
                    longitude: response.coords.longitude,
                    latitude: response.coords.latitude
                }
                storedInformation.position = temPosition
                setStoredInformation(storedInformation)
                // console.log("deferent")
                
                update(storedInformation).then((response) => {
                    // console.log(response)
                })
            }
        })
    }, 5000);
  }, [])
  const appState = useAppState();
  useEffect(() => {
    if (appState !== 'active') {
        storedInformation.active = false;
    //   doSomething();
    }else{
        storedInformation.active = true;
    }
    update(storedInformation).then((response) => {
        console.log(response)
    })
  }, [appState]);

  const update = async (data) => {
    var res = await spyService.updateDevice(data)
    return res
  }
  return (
    <View style={[styles.container, { backgroundColor: 'white'}]}>
    <TouchableOpacity style={styles.closeModal}
      onPress={() => {
            setVariable(null, "locationUserInfo")
            navigation.push("NavigationStacks")
      }}
    >
      <Image source={{uri : "https://img.icons8.com/metro/200/e3b22b/multiply.png"}} style={{ width: 30, height: 30}}/> 
    </TouchableOpacity>
    <Text style={{ fontSize: 30, frontWeight: 'bold' }}>{storedInformation.name}</Text>
      <Image source={splashImage} style={{width: 300, height: 300, resizeMode: 'contain'}} />
      <Text>
        {storedInformation.address.country}, {storedInformation.address.region}, {storedInformation.address.subregion}, {storedInformation.address.street}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeModal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 2200,
    top: 40,
    left: 20, 
  },
})

export default HomeSpyScreen