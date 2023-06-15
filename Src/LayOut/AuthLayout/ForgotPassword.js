import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import InputBox from '../../Components/InputBox';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleName}>Forgot Your Password?</Text>
        <Text style={styles.titleContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.
        </Text>
        <Image
          style={styles.forgotImage}
          source={require('../../Assets/Png/Group222.png')}
        />
        <View style={styles.containBox}>
          <InputBox label="Email" placeholder="Enter your Email" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPressButton={() => navigation.navigate('OTP')}
            customStyles={{
              height: 45,
              width: 130,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 40,
  },
  titleName: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 700,
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    width: 225,
    lineHeight: 19,
  },
  forgotImage: {
    width: 162,
    height: 142,
    margin: 25,
  },
  containBox: {
    width: '100%',
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
