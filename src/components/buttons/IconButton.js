import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const PrimaryButton = ({ text, handleClick, color, widths }) =>{
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: color, width: widths, height: widths}]} onPress={() => { handleClick(text)}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: text }} style={{ width: 30 , height: 30 }}/>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
  }
})