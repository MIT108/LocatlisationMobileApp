import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

export default function PushNotificationScreen(){

    useEffect(() => {
        registerForPushNotification()
        .then(token=> console.log(token))
        .catch(error=> console.log(error))
    }, [])

    async function registerForPushNotification(){
        const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
        if (status != 'granted') {
            const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
        }
        if (status != 'granted'){
            alert("fail to get push token")
            return
        }

        var token = (await Notifications.getExpoPushTokenAsync()).data
        return token
    }

    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}