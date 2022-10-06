import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import PrimaryInput from '../../components/inputs/PrimaryInput'

import PrimaryButtonDark from '../../components/buttons/PrimaryButtonDark'

import IconButton from '../../components/buttons/IconButton'
import AuthenticationHeader from '../../components/includes/AuthenticationHeader'
import { Colors } from '../../components/Colors'
import HeadImage from '../../assets/images/login.png'
import userService from '../../api/userService'

const LoginScreen= ({navigation}) => {
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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const EmailIcon = "https://img.icons8.com/material-rounded/100/000000/new-post.png"

    
    const checkValidEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }

    const login  = async () => {

        if (checkValidEmail(email) && password.length > 0) {
            var data = {
                email: email,
                password: password,
            }
            var res = await userService.loginUser(data)
    
            if (res.statusCode == 200) {
                setEmail("")
                setPassword("")
                navigation.push("NavigationStacks")
            }
            Alert.alert(res.message)
            
        } else {
            Alert.alert("Enter email and password")
            
        }

    }
    return (
        <View style={{ marginVertical: 40, marginTop: 40 }}>
            <View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={email} keyboardType="email-address" placeholder="" onChangeText={setEmail} type="text" label="email" icon={EmailIcon} />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={password} keyboardType="email-address" placeholder="" onChangeText={setPassword} type="password" label="Password" icon={EmailIcon} />
                </View>
                <View  style={{ marginVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                    Vous avez oublié votre mot de passe?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.text.primaryColor }}>
                            &nbsp; Cliquez ici
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <PrimaryButtonDark text="Login" onClickHandler={() => { login() }}  />
                </View>
            </View>
        </View>
    )
}


const Footer = ({navigation}) => {

    return (
        <View>
            
            <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Text>
                    Vous n'avez pas de compte?
                    </Text>
                    <TouchableOpacity
                    onPress={() => navigation.push('RegisterScreen')}
                    >
                        <Text style={{ color: Colors.text.primaryColor }}>
                            &nbsp; Click Here
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default LoginScreen

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