import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Colors } from '../Colors'

const logo =  require('../../assets/splashscreen/image1.jpeg')
const LevelCard = ({image, heading, description, color, onClickHandler}) => {
  return (
    <View>
        <View>
        <TouchableWithoutFeedback
        onPress={() => {
            onClickHandler()
        }}>
        <View style={[styles.mainCardView,{backgroundColor: color}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.subCardView}>
              <Image
                source={image}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 100,
                  width: 100,
                }}
              />
            </View>
            <View style={{marginLeft: 50}}>
              <Text
                style={{
                  fontSize: 30,
                  borderWidth: 0,
                  color: color == Colors.background.primaryColor? "white":'black',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>{heading}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '95%',
                }}>
                <Text
                  style={{
                  color: color == Colors.background.primaryColor? "white":'black',
                    fontSize: 12,
                  }}>
                  {description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
        </View>
    </View>
  )
}

export default LevelCard

const styles = StyleSheet.create({

        container: {
          flex: 1,
          backgroundColor: 'white',
        },
        mainCardView: {
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          shadowColor: 'shadow',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 8,
          elevation: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 14,
          marginTop: 6,
          marginBottom: 6,
          marginLeft: 16,
          marginRight: 16,
        },
        subCardView: {
          height: 50,
          width: 50,
          borderRadius: 25,
          borderWidth: 1,
          borderStyle: 'solid',
          alignItems: 'center',
          justifyContent: 'center',
        },
})