import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import PrimaryInput from '../../components/inputs/PrimaryInput'

import PrimaryButtonDark from '../../components/buttons/PrimaryButtonDark'

import userService from '../../api/userService'
import { Colors } from '../../components/Colors'
import HeadImage from '../../assets/images/register.png'
import { encryptValue } from '../../services/AES'

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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const EmailIcon = "https://img.icons8.com/material-rounded/100/000000/new-post.png"
    const checkValidEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
    const register = async () => {
        if (name.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
            if (checkValidEmail(email)) {
                if (password == confirmPassword) {
                    var data = {
                        name: name,
                        email: email,
                        password: password,
                        type: 0
                    }
                    var res = await userService.addUser(data)
                     
                    if (res.statusCode == 200) {
                        setName("")
                        setEmail("")
                        setPassword("")
                        setConfirmPassword("")
                    }
                    Alert.alert(res.message)
                } else {
                    Alert.alert("Les 2 mot de passe ne corespond pas")
                }
            }else{
                Alert.alert("Entre un email valide")
            }
        }else{
            Alert.alert("Entre tout les champ")
        }
    }

    return (
        <View style={{ marginVertical: 10, marginTop: 40 }}>
            <View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={name} keyboardType="default" placeholder="" onChangeText={setName} type="text" label="Name" icon={EmailIcon} />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={email} keyboardType="email-address" placeholder="" onChangeText={setEmail} type="text" label="email" icon={EmailIcon} />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={password} keyboardType="default" placeholder="" onChangeText={setPassword} type="password" label="Mot de passe" icon={EmailIcon} />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <PrimaryInput value={confirmPassword} keyboardType="default" placeholder="" onChangeText={setConfirmPassword} type="confirm password" label="Confirmer le mot de passe" icon={EmailIcon} />
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
                    <PrimaryButtonDark text="Enregistrez" onClickHandler={() => { 
                        register()
                    }}  />
                </View>
            </View>
        </View>
    )
}


const Footer = ({navigation}) => {
    const facebook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAArklEQVRIie2TsQ3CMBBFv+kQDWIGCjoqGiZgBJZgAWZghiwTGIAKCpAQC9BQJcWjigSRLZ0dFwjy2tO/923Z0l8BjIEdcAFqoAJuwDzH8glwws8mlBtEOLaSZoHZI6qtD+Daal0Aa2AFxBQNCqqWYGjJuQgBH0HnTNnuR+siAA7NfXhmDU9gkSSQtDSUHEmapgqs3FMFe8Pys6RjaPjjr6gX9ILsgvdPV+Yu8r28AFjDkVenGKc6AAAAAElFTkSuQmCC"

    return (
        <View>
            
            <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 30}}>
                    <Text>
                    Vous avez déjà un compte?
                    </Text>
                    <TouchableOpacity
                    onPress={() => navigation.push('LoginScreen')}
                    >
                        <Text style={{ color: Colors.text.primaryColor }}>
                            &nbsp; Cliquez ici
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