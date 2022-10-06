import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Colors'
const PlayIcon = "https://img.icons8.com/glyph-neue/64/d2d5d6/play.png"

const LevelListing = ({location, handleOnclick}) => {
  return (
    <TouchableOpacity style={styles.container}
        onPress={() => {
            handleOnclick()
        }}
    >
        <View>
            <Text style={styles.name}>{location.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default LevelListing

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    name: {
        fontSize: 20
    },
})