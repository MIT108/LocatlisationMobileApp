import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Logo = require('../../assets/splashscreen/image1.jpeg')

const AuthenticationHeader = ({ text }) => {
    return (
        <View style={styles.androidSafeArea}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'flex-end', height: 100 }}>
                    <Text style={{ fontSize: 50, color: 'black', fontWeight: 'bold' }}>{text}</Text>
                </View>
            </View>
        </View>
    )
}

export default AuthenticationHeader

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1, 
        width: '100%', 
        height: '100%',  
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    }
})