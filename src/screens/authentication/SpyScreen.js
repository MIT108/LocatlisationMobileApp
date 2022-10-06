import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import PrimaryInput from '../../components/inputs/PrimaryInput'

import PrimaryButtonDark from '../../components/buttons/PrimaryButtonDark'

import IconButton from '../../components/buttons/IconButton'
import AuthenticationHeader from '../../components/includes/AuthenticationHeader'
import { Colors } from '../../components/Colors'
import HeadImage from '../../assets/images/spy.png'
import spyService from '../../api/spyService'

const SypScreen= ({navigation}) => {
    return (
        <View style={styles.androidSafeArea}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <Image source={HeadImage} width={50}  height={50} style={{ width: 400, height: 400 }}/>
                </View>
                <ScrollView style={styles.form}>
                    <LoginFrom navigation={navigation} />
                    <View>
                        <Footer navigation={navigation} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const LoginFrom = ({navigation}) => {
    const [code, setCode] = useState("")

    

    const login  = async () => {

        if (code.length > 0) {
            var data = {
                id: code,
            }
            var res = await spyService.loginSpy(data)
    
            if (res.statusCode == 200) {
                setCode("")
                navigation.push("NavigationStacks")
            }
            Alert.alert(res.message)
            
        } else {
            Alert.alert("Enter valid code")
            
        }

    }
    return (
        <View style={{ marginVertical: 10, marginTop: 50 }}>
            <View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={code} keyboardType="default" placeholder="Entree le code" onChangeText={setCode} type="text" label="Code" />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <PrimaryButtonDark text="Espioner" onClickHandler={() => { login() }}  />
                </View>
            </View>
        </View>
    )
}


const Footer = ({navigation}) => {

    return (
        <View>
            
            <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50}}>
                    <TouchableOpacity
                    onPress={() => navigation.push('LoginScreen')}
                    >
                        <Text style={{ color: Colors.text.primaryColor }}>
                            &nbsp; Retour
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default SypScreen

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    form: {
        height: '65%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      backgroundColor: '#dfe3da',
    }
})