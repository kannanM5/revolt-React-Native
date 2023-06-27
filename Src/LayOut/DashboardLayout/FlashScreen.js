import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';

const FlashScreen = () => {
  return (
    <ImageBackground
      source={require('../../Assets/Png/bg.png')}
      style={styles.backgroundImage}>
      <Image
        style={styles.image}
        source={require('../../Assets/Png/flash.png')}
      />
    </ImageBackground>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
