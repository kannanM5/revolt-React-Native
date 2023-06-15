import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const OtpVerify = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.optImage}
          source={require('../../Assets/Png/opt.png')}
        />
        <Text style={styles.titleName}>Verification Code</Text>
        <Text style={styles.titleContent}>
          We send a verification code to lorumipsum@gmail.com
        </Text>
        <View style={styles.containBox}>
          <InputBox placeholder="0" />
          <InputBox placeholder="1" />
          <InputBox placeholder="2" />
          <InputBox placeholder="8" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            onPressButton={() => navigation.navigate('Reset Password')}
          />
        </View>
        <Text style={styles.AccountSet}>
          Don’t receive code?
          <Text style={styles.AccountSetup}> Request again</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 40,
  },
  optImage: {
    width: 259,
    height: 240,
  },
  titleName: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 700,
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.6)',
    width: 235,
    lineHeight: 24,
    marginBottom: -15,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  containBox: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
  },
  AccountSet: {
    fontSize: 16,
    fontWeight: 400,
  },

  AccountSetup: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontWeight: 600,
    marginVertical: 8,
  },
});
