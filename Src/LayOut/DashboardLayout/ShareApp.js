import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import SubHeader from '../../Components/SubHeader';
import {FONTS} from '../../Utilities/Fonts';

const ShareApp = ({navigation}) => {
  return (
    <>
      <SubHeader titleName="Share app" onPress={() => navigation.goBack()} />
      <ImageBackground
        source={require('../../Assets/Png/bg.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>Share App with friends</Text>
          <View style={styles.parent}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Linking.openURL('https://www.whatsapp.com');
              }}
              style={[
                styles.content,
                {backgroundColor: '#00C169', marginRight: 10, marginRight: 10},
              ]}>
              <Image
                style={styles.image}
                source={require('../../Assets/Png/whatsapp.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.content,
                {backgroundColor: '#294DA5', marginRight: 10},
              ]}
              onPress={() => {
                Linking.openURL('https://www.facebook.com');
              }}>
              <Image
                style={styles.image}
                source={require('../../Assets/Png/fb.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Linking.openURL('https://www.skype.com/');
              }}
              style={[
                styles.content,
                {backgroundColor: '#00AFF0', marginRight: 10},
              ]}>
              <Image
                style={styles.image}
                source={require('../../Assets/Png/skype.png')}
              />
            </TouchableOpacity>
            <View
              style={[
                styles.content,
                {backgroundColor: '#00AFF0', marginRight: 10},
              ]}>
              <Image
                style={styles.image}
                source={require('../../Assets/Png/shares.png')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default ShareApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  parent: {
    flexDirection: 'row',
    paddingVertical: 35,
  },
  text: {
    fontSize: 18,
    fontFamily: FONTS.Andika.bold,
    paddingTop: 50,
  },

  content: {
    width: 64,
    height: 62,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  image: {
    alignSelf: 'center',
  },
});
