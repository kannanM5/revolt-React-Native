import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import LinearGradientComponent from '../../Components/LinearGradient';
import {FONTS} from '../../Utilities/Fonts';
import {COLORS} from '../../Utilities/Colors';
import {EMAIL_REGEX} from '../../Utilities/Constants';
import {login, sociallogin} from '../../Services/Services';
import DeviceInfo from 'react-native-device-info';
import {getAuthCode, storeToken} from '../../Methods';
import {useDispatch} from 'react-redux';

const Login = () => {
  const navigation = useNavigation();
  const deviceId = DeviceInfo.getDeviceId();
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, 'Email must be 5 characters long')
      .max(30, 'Too Long!')
      .required('Email cannot be blank')
      .matches(EMAIL_REGEX, 'Invalid email address'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters long')
      .max(20, 'Password must be 20 characters long')
      .required('Password cannot be blank'),
  });

  const {handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      handleLogin(values);
    },
  });

  const handleLogin = data => {
    let formData = new FormData();
    formData.append('authcode', getAuthCode(deviceId + data.email));
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('devicetype', 1);
    formData.append('deviceid', deviceId);
    console.log(formData);
    login(formData)
      .then(res => {
        if (res.data.status === 1) {
          storeToken(res.data.token, dispatch);
          console.log(res.data);
        }
      })
      .catch(error => console.log(error, 'error'));
  };

  const handleGoogle = () => {
    let formData = new FormData();
    formData.append('name');
    formData.append('mediaid');
    formData.append('mediatype', 2);
    formData.append('devicetype', 1);
    formData.append('deviceid', deviceId);
    console.log(formData);
    sociallogin(formData)
      .then(res => {
        console.log(res, '--');
        S;
        if (res.data.status === 1) {
          console.log(res.data, '---sucess');
        }
      })
      .catch(error => console.log(error, 'error'));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Png/Revolt-logo.png')}
      />
      <Text style={styles.welcomeMessage}>Welcome Back!</Text>
      <Text
        onPress={() => navigation.navigate('PageScreens')}
        style={styles.LoginMessage}>
        Login to Continue
      </Text>
      <View style={styles.containBox}>
        <InputBox
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChangeText={handleChange('email')}
          errors={errors.email && touched.email ? true : null}
          errorText={errors.email}
        />
      </View>

      <View style={styles.containBox}>
        <InputBox
          label="Password"
          placeholder="Enter your Password"
          value={values.password}
          onChangeText={handleChange('password')}
          customInputStyles={{position: 'relative'}}
          errors={errors.password && touched.password ? true : null}
          errorText={errors.password}
          setPassword={true}
        />
      </View>

      <Text
        onPress={() => navigation.navigate('Forgot Password')}
        style={styles.forgotPassword}>
        Forgot Password ?
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPressButton={handleSubmit}
          customStyles={{marginTop: 6}}
        />
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
          customStyles={styles.btn}
          customStylesText={{color: 'white', paddingLeft: 20}}
          onPressButton={handleGoogle}
        />
        <Image
          style={styles.image1}
          source={require('../../Assets/Png/google.png')}
        />
        <Button
          title="Facebook"
          customStyles={styles.customBtn}
          customStylesText={styles.customTextBtn}
        />
        <Image
          style={styles.image2}
          source={require('../../Assets/Png/fb.png')}
        />
      </View>
      <Text style={styles.AccountSetup}>Don't have an account ?</Text>
      <Text
        onPress={() => navigation.navigate('Create Account')}
        style={styles.AccountCreate}>
        Sign up
      </Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 40,
    marginBottom: 10,
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
    margin: 10,
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
    fontFamily: FONTS.Andika.bold,
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontFamily: FONTS.Andika.bold,
    fontSize: 15,
  },
  image1: {
    width: 16,
    height: 18,
    position: 'absolute',
    top: 25,
    left: 23,
  },
  image2: {
    width: 9,
    height: 18,
    position: 'absolute',
    top: 25,
    right: 105,
  },
  btn: {
    backgroundColor: '#ff4500',
    height: 40,
    width: 130,
    marginRight: 30,
    textTransform: 'normal',
    position: 'relative',
  },
  customBtn: {
    backgroundColor: '#356AD7',
    height: 40,
    width: 130,
    position: 'relative',
  },
  customTextBtn: {
    color: 'white',
    paddingLeft: 12,
  },
});
