import { useEffect } from "react";
import { useState } from "react";
import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import {Colors} from "../../../components/Colors";
import DeviceItem from "./DeviceItem";



function ListDevice({devices, setCurrentDevice}) {
  const [listData, setListData] = useState(
    devices.map((device) => ({
      key:  device.id,
      code: device.code,
      id: device.id,
      userId: device.userId,
      name: device.name,
      address: device.address,
      active: device.active,
      position: device.position,
    }))
  );

  /**
   * Action for the close option on Swipe
   *
   * Closes the options on selected notification
   *
   * @param {*} rowMap
   * @param {*} rowKey
   */
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  /**
   * Action for the delete option on Swipe
   *
   * Deletes selected notification
   *
   * @param {*} rowMap
   * @param {*} rowKey
   */
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key == rowKey);
    listData[prevIndex].status = true;
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  /**
   * Action button of the Delete Icon
   *
   * Pops an alert to confirm the action and if response is positive, deletes all notifications
   */
  const onDeleteAllPress = () => {
    Alert.alert(
      "Warning",
      "You are about to delete all notifications",
      [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel",
        },
        ,
        {
          text: "Delete All",
          onPress: () => {
            setListData([]);
          },
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  /**
   * Component returning Options at the back of each notifications
   *
   */
  const HiddenItemWithActions = ({ onClose, onDelete }) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}
        >
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.id)}
        onDelete={() => onDeleteAllPress()}
      />
    );
  };

//   const [currentDevice, setCurrentDevice] = useState()
//   useEffect(() => {
//     console.log("currentDevice", currentDevice)
//   }, [currentDevice])

  return (
    <View style={styles.container}>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        data={listData}
        keyExtractor={(notification) => notification.id.toString()}
        renderItem={({ item, rowMap }) => {
            return (
              <DeviceItem
                setCurrentDevice={setCurrentDevice}
                id={item.id}
                code={item.code}
                userId={item.userId}
                name={item.name}
                address={item.address}
                active={item.active}
                position={item.position}
              />
            );
        }}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: Colors.background.secondaryColor,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  headingText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    lineHeight: 20,
    marginVertical: 18,
    fontSize: 18,
    letterSpacing: 0.1,
  },
  icon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 20,
    left: 10,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: Colors.background.primaryColor,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 7,
    borderRadius: 12,
  },
});

export default ListDevice;
