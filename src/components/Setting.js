import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from './Colors'
const PlayIcon = "https://img.icons8.com/glyph-neue/64/d2d5d6/play.png"

const Setting = ({
    settingOptions
}) => {
  return (
    <View style={styles.container}>
    {
        settingOptions.map((settingOption, index) => (
            <TouchableOpacity key={index} style={styles.setting}
                onPress={() => settingOption.onClickHandler()}
            >
                <View>
                    <Text>{settingOption.text}</Text>
                </View>
                <View>
                        <Image source={{ uri: PlayIcon}} style={{ width: 20, height: 20   }}/>
                </View>
            </TouchableOpacity>
        ))
    }
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: Colors.background.secondaryColor,
        padding: 20,
        marginBottom: 30
    },
    setting: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    }
})