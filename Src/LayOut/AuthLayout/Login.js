import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import LinearGradientComponent from '../../Components/LinearGradient';

const Login = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, 'Email must be 5 characters long')
      .max(20, 'Too Long!')
      .required('Email cannot be blank'),
    password: Yup.string()
      .min(5, 'Password must be 5 characters long')
      .max(30, 'Password must be 20 characters long')
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
    console.log(data.email, data.password);
  };

  return (
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
          secureTextEntry={showPassword ? false : true}
          value={values.password}
          onChangeText={handleChange('password')}
          customInputStyles={{position: 'relative'}}
        />
        {showPassword ? (
          <TouchableOpacity onPress={handlePassword} style={styles.eyeBtn}>
            <Image
              style={styles.eye}
              source={require('../../Assets/Png/eye.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePassword} style={styles.eyeBtn}>
            <Image
              style={styles.eye}
              source={require('../../Assets/Png/eye1.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors.password && touched.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}
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
        />
        <Image
          style={styles.image1}
          source={require('../../Assets/Png/google.png')}
        />
        <Button
          title="Facebook"
          customStyles={{
            backgroundColor: '#356AD7',
            height: 40,
            width: 130,
            position: 'relative',
          }}
          customStylesText={{color: 'white', paddingLeft: 12}}
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
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
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
    fontWeight: 700,
    marginVertical: 8,
  },
  AccountCreate: {
    color: '#FC3A3A',
    fontWeight: 700,
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
  error: {
    color: 'red',
    fontSize: 14,
    margin: 0,
    alignSelf: 'flex-start',
  },
  eye: {
    position: 'absolute',
    width: 25,
    height: 16,
    zIndex: 99,
  },
  eyeBtn: {position: 'absolute', top: 60, right: 40},
});
