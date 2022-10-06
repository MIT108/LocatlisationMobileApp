import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Setting from '../../components/Setting'

const SettingScreen = () => {
    
    const onClickHandler = () => {
        alert("this is level")
    }
    
    const [settingOptions1, setSettingsOptions1] = useState([
        {
            text: "My Profile",
            onClickHandler
        },
    ])
    const [settingOptions2, setSettingsOptions2] = useState([
        {
            text: "Synchroniser les progres d'apprentissage",
            onClickHandler
        },
        {
            text: "Reinitialiser vos progres d'apprentissage",
            onClickHandler
        }
    ])
    const [settingOptions3, setSettingsOptions3] = useState([
        {
            text: "Remarques",
            onClickHandler
        },
        {
            text: "Aimer TheKafe",
            onClickHandler
        }
    ])
    const [settingOptions4, setSettingsOptions4] = useState([
        {
            text: "Mode nuit",
            onClickHandler
        }
    ])
  return (
    <View style={{ padding: 10, backgroundColor: '#d2d5d6', height: "100%" }}>
    <ScrollView>
        <Setting settingOptions={settingOptions1} />
        <Setting settingOptions={settingOptions2} />
        <Setting settingOptions={settingOptions3} />
        <Setting settingOptions={settingOptions4} />
    </ScrollView>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})