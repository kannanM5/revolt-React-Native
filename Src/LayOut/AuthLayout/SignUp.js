import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <View style={styles.TakeProfileImg}>
          <Image
            style={styles.setImage}
            source={require('../../Assets/Png/camera.png')}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: 2000}}>
        <View style={styles.containBox}>
          <InputBox label="Name" placeholder="Enter your Name" />
        </View>
        <View style={styles.containBox}>
          <InputBox label="Email" placeholder="Enter your Email" />
        </View>

        <View style={styles.containBox}>
          <InputBox label="Password" placeholder="Enter your Password" />
        </View>

        <View style={styles.containBox}>
          <InputBox
            label="Conform  Password"
            placeholder="Enter your Conform  Password"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign up" />
        </View>
        <Text style={styles.AccountSetup}>Already have an account ?</Text>
        <Text
          onPress={() => navigation.navigate('login')}
          style={styles.AccountCreate}>
          Sign In
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 40,
  },
  profileImage: {
    width: 109,
    height: 109,
    backgroundColor: '#E2E2E2',
    borderRadius: 50,
    position: 'relative',
    marginTop: 20,
  },
  TakeProfileImg: {
    position: 'absolute',
    left: 75,
    top: 70,
    width: 39,
    height: 39,
    backgroundColor: '#ECA405',
    borderRadius: 20,
  },
  setImage: {
    width: 16,
    height: 13,
    position: 'absolute',
    top: 13,
    left: 12,
  },
  containBox: {
    width: '100%',
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
  },
  AccountSetup: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontWeight: 700,
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontWeight: 700,
    fontSize: 15,
    alignSelf: 'flex-start',
  },
});
