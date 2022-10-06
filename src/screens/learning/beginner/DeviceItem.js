import { Pressable, StatusBar,  StyleSheet, Text, View} from "react-native";
import React from "react";
import {Colors} from "../../../components/Colors";
import { TouchableOpacity } from "react-native";
import { DeviceContext } from "../../../context/DeviceContext";
import { useContext } from "react";
import { useState } from "react";

function DeviceItem({ 
    id,
    code,
    userId,
    name,
    address,
    active,
    position,
    setCurrentDevice
}) {
    const [device, setDevice] = useState({ 
        id,
        code,
        userId,
        name,
        address,
        active,
        position,
    })

  return (
    <Pressable style={[styles.notificationContainer, {shadowColor: !active ? 'red' : 'green'}]}
    onPress={() =>{
        setCurrentDevice(device)
    }}>
      <View style={styles.notificationDetails}>
        <Text>
          <Text style={styles.username}>{name} / {code}</Text> 
        </Text>
        <Text style={styles.time}>
        {address.country}, {address.region}, {address.subregion}, {address.street}
        </Text>
        <StatusBar style="auto" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    elevation: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    marginVertical: 5,
    marginHorizontal: 3,
    flexDirection: "row",
  },
  profile: {
    width: 50,
    height: 50,
    marginRight: 24,
  },
  notificationDetails: {
    justifyContent: "space-between",
    flex: 1,
  },
  profileImage: {
    resizeMode: "contain",
    borderRadius: 100,
  },
  username: {
    fontWeight: "bold",
  },
//   time: {
//     fontWeight: "400",
//     fontSize: 12,
//     color: Colors.background.black,
//     opacity: 0.5,
//   },
});

export default DeviceItem;
