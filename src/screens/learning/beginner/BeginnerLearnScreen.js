import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapScreen from './MapScreen'
import { useEffect } from 'react'
import {CurrentLocation} from './CurrentLocation'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import PrimaryInput from '../../../components/inputs/PrimaryInput'
import PrimaryButtonDark from '../../../components/buttons/PrimaryButtonDark'
const PlayIcon = "https://img.icons8.com/glyph-neue/64/d2d5d6/play.png"
import { AppContext } from "../../../context/AppContext";
import { DeviceContext } from "../../../context/DeviceContext";
import { useContext } from 'react'
import deviceService from '../../../api/deviceService'
import ListDevice from './ListDevice'
import { randomNumber } from '../../../services/AES'



const BeginnerLearnScreen = () => {
  const [latLng, setLatLng] = useState()
  const [devices, setDevices] = useState([])
  
  
  useEffect(() => {
    setInterval(() => {
      CurrentLocation().then((response) => {
        var data = {
          latitude: response.coords.latitude,
          longitude: response.coords.longitude 
        }
        setLatLng(data)
      })
    }, 10000);
  }, [])

  const { storedInformation, setStoredInformation } = useContext(AppContext);

  useEffect(()=> {
    CurrentLocation().then((response) => {
      var data = {
        latitude: response.coords.latitude,
        longitude: response.coords.longitude 
      }
      setLatLng(data)
    })
    getAllDevice()

  }, [])

  const getAllDevice = () => {
    deviceService.listDevices(storedInformation.id).then((response) => {
      setDevices(response.data)
    })
  }

  const [name, setName] = useState("")

  const [showMap, setShowMap] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [currentDevice, setCurrentDevice] = useState()

  useEffect(() => {
    if (currentDevice) {
      setShowMap(true)
    }
  }, [currentDevice])

  
  const addDevice = async () => {
    if (name.length > 0 && storedInformation.id.length > 0) {
      var address = null
      await CurrentLocation().then((response) => {
        address = response.address
      })
      var data = {
          code: randomNumber(5),
          name: name,
          userId: storedInformation.id,
          position: latLng,
          active: false,
          address: address[0]
      }
      var res = await deviceService.addDevice(data)
        
      if (res.statusCode == 200) {
          getAllDevice()

          setShowModal(false);
          setName("")
      }
      alert(res.message)
    
    }else{
       alert("Entre tout les champ")
    }
  }

  return (
    <View>
    {
      showModal ? (
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeModal}
            onPress={() => {
              setShowModal(false);
            }}
          >
            <Image source={{uri : "https://img.icons8.com/metro/200/e3b22b/multiply.png"}} style={{ width: 30, height: 30}}/> 
          </TouchableOpacity>
          <View style={styles.modalHeader}>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Ajouter un nouvel appareil</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
              <PrimaryInput value={name} keyboardType="default" placeholder="Nom de l'appreil" onChangeText={setName} type="text"  />
          </View>
          
          <View style={{ marginVertical: 5 }}>
              <PrimaryButtonDark text="Ajouter" onClickHandler={() => { 
                  addDevice()
              }}  />
          </View>
        </View>
      ): (
        null
      )
    }

      <View style={styles.container}>

        {!showMap ? (
          <View>
          
          <View>
            <TouchableOpacity style={styles.add}
            onPress={() => {
              setShowModal(true);
            }}
            >
              <Image source={{uri : "https://img.icons8.com/sf-regular-filled/200/e3b22b/add.png"}} style={{ width: 70, height: 70}}/> 
            </TouchableOpacity>
          </View>
          {
            devices.length > 0 ? (
              <View>
                <ListDevice devices={devices}  setCurrentDevice={setCurrentDevice} />
              </View>
            ) : (
              <View style={styles.noDevice}>
                <Text>No Device located</Text>
              </View>
            )
          }
          </View>
        ) : (
          <>
          {
            currentDevice != null ? (

              <View style={{ width: '100%', height: '100%'}}>
              {
                console.log(currentDevice)
              }
                <TouchableOpacity style={styles.back}
                onPress={() => {
                  setShowMap(false);
                }}>
                  <Image source={{uri : "https://img.icons8.com/metro/200/e3b22b/long-arrow-left.png"}} style={{ width: 40, height: 40}}/> 
                </TouchableOpacity>
                <MapScreen style={{ width: '100%', height: '80%'}} userLocation={latLng}
                  device={currentDevice}
                /> 
              </View>
            ) : (
              <Text> trying to get your location</Text>

            )

          }
          </>
        )}
      </View>
    </View>
  )
}

export default BeginnerLearnScreen

const styles = StyleSheet.create({
  container: {
      margin: 10
  },
  back: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1000,
    top: 700,
    left: 20, 
  },
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
  add: {
    position: 'absolute',
    zIndex: 2000,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center', 
    right: 0, 
    alignItems: 'center',
    top: 0,
  },
  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,0,0.2)',
    paddingTop: 200,
    zIndex: 1000,
  },
  modalHeader: {
    alignItems: 'center',
  },
  closeModal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 2200,
    top: 20,
    right: 20, 
  },
  noDevice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  }
})