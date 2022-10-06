import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import IconDrawer from '../../../assets/icon/exercise.png'
import Logo from '../../../assets/icon/exercise.png'
import { Colors } from '../../../components/Colors'


const DrawerHeader = ({navigation}) => {
  return (
    <View style={[styles.wrapper, styles.androidSafeArea]}>
       <View>
          <TouchableOpacity
            onPress={()=>{
                navigation.openDrawer()
            }}
          >
            <Image source={IconDrawer} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
       </View>
       <View>
         <Text style={styles.text}>Beginner Level</Text>
       </View>
       <View>
          <TouchableOpacity
            onPress={()=>{
              Alert.alert("Welcome to translation !!!!!!!!!")
            }}
          >
            <Image source={Logo} style={{ width: 50, height: 50 }} />
            
          </TouchableOpacity>
       </View>
    </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
  androidSafeArea: {
      flex: 1,
      backgroundColor: Colors.background.primaryColor,
      paddingTop: Platform.OS === 'android' ? 30 : 0
  },
    wrapper: {
      backgroundColor: 'white',
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        maxHeight: 90, 
        alignItems: 'center', 
        paddingHorizontal: 20
    },
    text:{
        fontSize: 20, 
        borderBottomWidth: 2, 
        borderColor: "#07338C", 
        color: "#07338C", 
        fontWeight: "700"
    }
})