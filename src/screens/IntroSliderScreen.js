import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../components/Colors'


const IntroSliderScreen = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };
  
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={()=>{
            navigation.push("WelcomeScreen")
          }}
          showSkipButton={true}
          onSkip={()=>{
            navigation.push("WelcomeScreen")
          }}
        />
      )}
    </>
  );
}

export default IntroSliderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    title: 'Direct Translation',
    text: 'Direct translation of all national languages and Cameroon local languages',
    image: {
      uri:
        'https://img.icons8.com/cotton/200/ffffff/translation--v1.png',
    },
    backgroundColor: Colors.background.primaryColor,
  },
  {
    key: 's2',
    title: 'Good Learn Methods',
    text: 'Good learn methods are put in place for a fast understanding and learning of a native Cameroonian languages',
    image: {
      uri:
        'https://img.icons8.com/ios/200/ffffff/learn-information.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Best Exercise',
    text: 'Exercise available for quick mastery an good judgment of your evolution',
    image: {
      uri:
        'https://img.icons8.com/external-outline-lafs/200/ffffff/external-Learn-study-smart-contract-and-testnet-outline-lafs.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Online Certificate',
    text: 'Virtual certificates will be attributed to you at the end of you learning',
    image: {
      uri:
        'https://img.icons8.com/pastel-glyph/200/ffffff/certificate.png',
    },
    backgroundColor: Colors.background.primaryColor,
  },
  {
    key: 's5',
    title: 'Games',
    text: 'Interactive gave a made available for fast learning',
    image: {
      uri:
        'https://img.icons8.com/ios/200/ffffff/controller.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Chat Bot',
    text: 'A chat bot is made available for any assistance 24/7',
    image: {
      uri:
        'https://img.icons8.com/external-line512-zulfa-mahendra/200/ffffff/external-chat-bot-metaverse-line512-zulfa-mahendra.png',
    },
    backgroundColor: '#febe29',
  },
];
