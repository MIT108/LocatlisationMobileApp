/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable eol-last */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import profileImage from '../../../assets/logo/finallogo.png'
import { getVariable, setVariable } from '../../../services/AsyncStorageMethods';
import { setStatusBarHidden } from 'expo-status-bar';

export function DrawerContent({props, navigation}) {

    const [isEnglish, setIsEnglish] = React.useState(true)
    const [userInfo, setUserInfo] = useState({})
    

    useEffect(() =>{
        getInfo().then((response) => {
            setUserInfo(response)
        })
    }, [])

    const getInfo = async () => {
        
        const info = await getVariable("locationUserInfo")
        return info
    }
    
    const toggleLanguage = () => {
        setIsEnglish(!isEnglish)
    }

    return (
        <View style={{ flex: 1, color: 'white'}}>
            <DrawerContentScrollView  {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                            <Avatar.Image
                                source={profileImage}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>{userInfo.name}</Title>
                                <Caption style={styles.caption}>{userInfo.email}</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Home"
                            onPress={()=>{props.navigation.navigate("Beginner")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Profile"
                            onPress={()=>{}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Location"
                            onPress={()=>{}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Other">
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                    name="settings-helper"
                                    color={color}
                                    size={size}
                                    />
                            )}
                            label="Setting"
                            onPress={()=>{props.navigation.navigate("SettingScreen")}}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                            />
                    )}
                    label="Sign Out"
                    onPress={()=>{
                        setVariable(null, "locationUserInfo")
                        navigation.push("NavigationStacks")
                    }}
                    />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#F4F4F4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})