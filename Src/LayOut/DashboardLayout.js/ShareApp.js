import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const ShareApp = () => {
  return (
    <ImageBackground
      source={require('../../Assets/Png/bg.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Share App with friends</Text>
        <View style={styles.parent}>
          <View
            style={[
              styles.content,
              {backgroundColor: '#00C169', marginRight: 10, marginRight: 10},
            ]}>
            <Image
              style={styles.image}
              source={require('../../Assets/Png/whatsapp.png')}
            />
          </View>
          <View
            style={[
              styles.content,
              {backgroundColor: '#294DA5', marginRight: 10},
            ]}>
            <Image
              style={styles.image}
              source={require('../../Assets/Png/fb.png')}
            />
          </View>
          <View
            style={[
              styles.content,
              {backgroundColor: '#00AFF0', marginRight: 10},
            ]}>
            <Image
              style={styles.image}
              source={require('../../Assets/Png/skype.png')}
            />
          </View>
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
    fontWeight: 700,
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
