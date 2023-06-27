import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../LayOut/AuthLayout/Login';
import SignUp from '../LayOut/AuthLayout/SignUp';
import ForgotPassword from '../LayOut/AuthLayout/ForgotPassword';
import OtpVerify from '../LayOut/AuthLayout/OtpVerify';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Create Account" component={SignUp} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OtpVerify} />
    </Stack.Navigator>
  );
};

export default RootStack;
