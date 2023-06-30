import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const FlashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../../Assets/Png/bg.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../Assets/Png/flash.png')}
        />
      </View>
    </ImageBackground>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
});
