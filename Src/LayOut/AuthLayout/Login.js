import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../Assets/Png/Revolt-logo.png')}
        />
        <Text
          onPress={() => navigation.navigate('Charging')}
          style={styles.welcomeMessage}>
          Welcome Back!
        </Text>
        <Text style={styles.LoginMessage}>Login to Continue</Text>
        <View style={styles.containBox}>
          <InputBox label="Email" placeholder="Enter your email" />
        </View>
        <View style={styles.containBox}>
          <InputBox
            label="Password"
            placeholder="Enter your Password"
            secureTextEntry={true}
          />
        </View>
        <Text
          onPress={() => navigation.navigate('Forgot Password')}
          style={styles.forgotPassword}>
          Forgot Password ?
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" />
        </View>
        <View style={styles.lines}>
          <View style={styles.lineImg}></View>
          <Text style={{color: '#000000', fontSize: 15, paddingHorizontal: 12}}>
            or
          </Text>
          <View style={styles.lineImg}></View>
        </View>

        <View style={styles.MainButtons}>
          <Button
            title="Google"
            customStyles={{
              backgroundColor: '#ff4500',
              height: 40,
              width: 100,
              marginRight: 70,
              textTransform: 'normal',
            }}
            customStylesText={{color: 'white'}}
          />
          <Button
            title="Facebook"
            customStyles={{
              backgroundColor: '#356AD7',
              height: 40,
              width: 100,
            }}
            customStylesText={{color: 'white'}}
          />
        </View>
        <Text style={styles.AccountSetup}>Don't have an account ?</Text>
        <Text
          onPress={() => navigation.navigate('Create Account')}
          style={styles.AccountCreate}>
          Sign up
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 40,
  },
  logo: {
    width: 175,
    height: 44,
    marginBottom: 5,
  },
  welcomeMessage: {
    fontWeight: 700,
    fontSize: 19,
    color: 'black',
    fontFamily: 'Andika New Basic',
    margin: 15,
    letterSpacing: 0.5,
  },
  LoginMessage: {
    fontWeight: 700,
    fontSize: 24,
    fontFamily: 'Andika New Basic',
    color: 'rgba(0,0,0,0.6)',
    letterSpacing: 1.5,
    marginBottom: 15,
  },
  containBox: {
    width: '100%',
    marginBottom: 5,
  },
  forgotPassword: {
    color: '#FEBF00',
    fontSize: 15,
    fontWeight: 700,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  lines: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineImg: {
    width: 133,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  MainButtons: {
    flexDirection: 'row',
  },
  AccountSetup: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontWeight: 700,
    marginVertical: 8,
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontWeight: 700,
    fontSize: 15,
  },
});
