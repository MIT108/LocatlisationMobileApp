import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Colors} from '../Colors'

const PrimaryButtonDark = ({text, onClickHandler}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      onClickHandler()
    }}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButtonDark

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background.primaryColor,
        borderWidth: 3,
        borderColor: 'white',
        marginHorizontal: 30,
        height: 60,
        borderRadius: 20,
        display: 'flex',
        borderWidth: 2,
        borderColor: Colors.text.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.text.secondaryColor,
    }
})