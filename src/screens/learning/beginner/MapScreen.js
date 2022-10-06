import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from '../../../components/mapStyle';
import { Colors } from '../../../components/Colors';
import MapViewDirections from 'react-native-maps-directions';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Image } from 'react-native';
import { useContext } from 'react';
import { DeviceContext } from '../../../context/DeviceContext';
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
// import { GOOGLE_MAPS_API_KEY } from "@env";
import { app } from "../../../../firebase";
import deviceService from '../../../api/deviceService';
import spyService from '../../../api/spyService';

const db = getFirestore(app);


// const GOOGLE_MAPS_API_KEY = 'AIzaSyAq5IgsEHFrJsFRYihIZ0cc53dBhnb6P68'
const GOOGLE_MAPS_API_KEY = 'AIzaSyC7WVaKcMyrus1CoKszDFQ1_H2DyACeMlU'

const MapScreen = ( {userLocation, device} ) => {

    const [currentDevice, setCurrentDevice] = useState(device)
    const [duration, setDuration] = useState(null)
    const [distance, setDistance] = useState(null)
    
    const getDeviceInfo = async () => {
        var res = await spyService.getDeviceInfo(currentDevice.id)
        return res
    }


    useEffect(() => {
        setInterval(() => {
          getDeviceInfo().then((response) => {
            if (currentDevice.position.longitude == response.data.position.longitude 
                && currentDevice.position.latitude == response.data.position.latitude
                && currentDevice.active == response.data.active) {

                }else{
                setCurrentDevice(response.data)
            }
            // setLatLng(data)
          })
        }, 5000);
      }, [])


      const [showDirection , setShowDirection] = useState(false)

    const mapRef = useRef(null);

    // useEffect( () => {
    //     if (!props?.origin || !props?.destination) return;

    //     mapRef.current.fitToSuppliedMarkers( ['origin', 'destination'], {
    //         edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    //     } )
    // }, [] )

    return (
        <View>
        
        <TouchableOpacity style={styles.track}
        onPress={()=>{
            setShowDirection(!showDirection);
        }}
        >
            <Image source={{uri : "https://img.icons8.com/ios-glyphs/200/e3b22b/filled-sent.png"}} style={{ width: 40, height: 40}}/> 
        </TouchableOpacity>

        {
                showDirection ? (
                    <View style={styles.direction}>
                        <View style={styles.item}>
                            <Image source={{uri : "https://img.icons8.com/external-phatplus-solid-phatplus/64/e3b22b/external-distance-map-phatplus-solid-phatplus.png"}} style={{ width: 40, height: 40}} />
                        </View>
                        <View style={styles.text}>
                            <Text>{duration} min</Text>
                            <Text>{distance} m</Text>
                        </View>
                    </View>
                ): (
                    null
                )
        }
        <MapView
        style={{ width: '100%', height: 1000}}
            initialRegion={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
            }}
            ref={mapRef}
            customMapStyle={mapStyle}
        >
            <Marker
                coordinate={currentDevice.position}
                identifier="deviceLocation"
            >
                <View
                    style={{
                        width: 30,
                        height: 30,
                    }}
                >
                {
                    currentDevice.active ? (
                        <Image source={{ uri: "https://img.icons8.com/ios-filled/100/00FF00/region-code.png" }}  style={{ width: 30, height: 30}}/>
                    ) : (
                        <Image source={{ uri: "https://img.icons8.com/ios-filled/100/e3b22b/region-code.png" }}  style={{ width: 30, height: 30}}/>
                    )
                }
                </View>
            </Marker>
            <Marker
                coordinate={userLocation}
                identifier="userLocation"
            >
                <View
                    style={{
                        width: 30,
                        height: 30,
                    }}
                >
                <Image source={{ uri: "https://img.icons8.com/ios-filled/100/000000/region-code.png" }}  style={{ width: 30, height: 30}}/>
                </View>
            </Marker>
            {/* 
            <MapViewDirections
                origin={{ 
                    
                latitude: 3.86199,
                longitude: 11.53688,
                 }}
                destination={{ 
                    latitude: 3.406448,
                    longitude: 6.465422,
                 }}
                apikey={GOOGLE_MAPS_API_KEY}
                strokeWidth={3}
                strokeColor="hello"
            />
            
<MapViewDirections
                origin={{ 
                    
                latitude: 3.86199,
                longitude: 11.53688,
                 }}
                destination={{ 
                    latitude: 3.406448,
                    longitude: 6.465422,
                 }}
    strokeWidth={5}
/> */}

            
        {/* {
            props.origin != null ? (
                <Marker
                    coordinate={props.origin}
                    title={props.locationName}
                    identifier="userLocation"
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            backgroundColor: 'black'
                        }}
                    >
                        <Icon
                            type='material-community'
                            name='navigation'
                            color={Colors.background.primaryColor}
                            size={20}
                        />
                    </View>
                </Marker>
            ) : (
                null
            )
        } */}
            {/* <MapViewDirections
                origin={{ 
                latitude: 3.86199,
                longitude: 11.53688,
                 }}
                destination={{ 
                    latitude: 3.406448,
                    longitude: 6.465422,
                 }}
                apikey={GOOGLE_MAPS_API_KEY}
                strokeWidth={3}
                strokeColor="hello"
            /> */}
            {
                showDirection ? (
                    <MapViewDirections                      
                        origin={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude}}                        
                        destination={currentDevice.position}                          
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={3}
                        strokeColor="red"
                        onReady={result => {
                            setDistance(result.distance)
                            setDuration(result.duration)
                        //   fetchTime(result.duration, result.distance)
                        }}
                    />
                ) : (
                    null
                )
            }
            {/* {
                props?.moving && <Marker
                    coordinate={props.userLocation}
                    title={props.locationName}
                    identifier="userLocation"
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: '500%',
                            backgroundColor: 'white'
                        }}
                    >
                        <Icon
                            type='material-community'
                            name='navigation'
                            color={Colors.background.primaryColor}
                            size={20}
                        />
                    </View>
                </Marker>
            } */}
            {/* {
                props.userLocation && !props.moving && <Circle
                    key={props.userLocation.latitude + props.userLocation.longitude + 1}
                    center={props.userLocation}
                    radius={500}
                    strokeWidth={1}
                    strokeColor="transparent"
                    fillColor={Colors.background.primaryColor}
                />
            }
            {
                props.userLocation && !props.moving && <Circle
                    key={props.userLocation.latitude + props.userLocation.longitude + 2}
                    center={props.userLocation}
                    radius={50}
                    strokeWidth={1}
                    strokeColor="transparent"
                    fillColor="white"
                />
            } */}

            {/* {
                props.userLocation && !props.moving && <Circle
                    key={props.userLocation.latitude + props.userLocation.longitude + 3}
                    center={props.userLocation}
                    radius={20}
                    strokeWidth={1}
                    strokeColor="transparent"
                    fillColor={Colors.background.primaryColor}
                />
            }

            {
                props.userLocation && !props.moving && <Circle
                    key={props.userLocation.latitude + props.userLocation.longitude + 4}
                    center={props.userLocation}
                    radius={5}
                    strokeWidth={1}
                    strokeColor="transparent"
                    fillColor="white"
                />
            }

            {
                props.origin && props.destination && (
                    <MapViewDirections
                        origin={props.origin}
                        destination={props.destination}
                        apikey={GOOGLE_MAPS_API_KEY}
                        strokeWidth={3}
                        strokeColor={colors.accent}
                    />
                )
            }

            {
                props.destination && (
                    <Marker
                        coordinate={props.destination}
                        title={props.locationName}
                        identifier="destination"
                        >

                        <Icon
                            type='material-community'
                            name='map-marker'
                            size={36}
                            color={colors.accent}
                        />

                    </Marker>
                )
            } */}
        </MapView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
  track: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1000,
    top: 700,
    right: 20, 
  },
  direction: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 150,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1000,
    top: 10,
    right: 20, 
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  }
})