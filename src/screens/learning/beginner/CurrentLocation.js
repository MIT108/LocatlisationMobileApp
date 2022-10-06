import * as Location from 'expo-location';

export const CurrentLocation = async () => {
    let  {status}  = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
    }else{
        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(location.coords)
        // console.log("address", address)
        location.address = address
        return location
    }
}
