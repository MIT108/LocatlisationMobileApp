import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Colors} from '../Colors'

const SecondaryButtonLight = ({text, onClickHandler}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      onClickHandler()
    }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default SecondaryButtonLight

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background.secondaryColor,
        marginHorizontal: 30,
        height: 60,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.text.primaryColor,
        marginVertical: 10,
    },
    text:{
      fontSize: 25,
      fontWeight: 'bold',
      color: Colors.text.primaryColor,
    }
})