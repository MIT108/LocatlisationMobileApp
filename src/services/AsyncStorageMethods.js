import AsyncStorage from '@react-native-async-storage/async-storage'

export const setVariable = async (data, name) => {
    await AsyncStorage.setItem(name, JSON.stringify(data));
}

export const getVariable = async (name) => {
    
    const infoString = await AsyncStorage.getItem(name);
    const info = JSON.parse(infoString)

    return info
}