import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LevelCard from '../../components/carts/LevelCard'
import { Colors } from '../../components/Colors'

const GetStartScreen = ({navigation}) => {
    const level1 = require('../../assets/level/level1.png')
    const level2 = require('../../assets/level/level2.jpg')
    const level3 = require('../../assets/level/level3.jpg')

    const startLevel1 = () => {
        navigation.push('Drawers')
    }
    const startLevel2 = () => {
        alert("this is level 2")
    }
    const startLevel3 = () => {
        alert("this is level 3")
    }

    const levels = [
        {
            "image": level1,
            "heading": "Beginner", 
            "description": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Velit veritatis nesciunt molestiae repellat. Non aut ad ipsa et.", 
            "color": "white", 
            "onClickHandler": startLevel1
        },
        {
            "image": level2,
            "heading": "Intermediate", 
            "description": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Velit veritatis nesciunt molestiae repellat. Non aut ad ipsa et.", 
            "color": Colors.background.primaryColor, 
            "onClickHandler": startLevel2
        },
        {
            "image": level3,
            "heading": "Advance", 
            "color": "white",             
            "description": "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Velit veritatis nesciunt molestiae repellat. Non aut ad ipsa et.", 
            "onClickHandler": startLevel3
        },
    ]
    

  return (
    <View style={[styles.container, styles.droidSafeArea]}>
        <View style={styles.heading}>
            <Text style={styles.text}>
                Choose Level
            </Text>
        </View>
        <View>
        {levels.map((level, index)=>(
            <LevelCard key={index} color={level.color} image={level.image} heading={level.heading} description={level.description} onClickHandler={level.onClickHandler} />
        ))}

        </View>
    </View>
  )
}

export default GetStartScreen

const styles = StyleSheet.create({
    
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        padding: 20,
        height: '100%',
    },
    heading: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 45,
        fontWeight: 'bold',
        color: Colors.background.primaryColor,
    }
})