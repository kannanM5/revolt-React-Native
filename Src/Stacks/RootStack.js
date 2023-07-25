import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../LayOut/AuthLayout/Login';
import SignUp from '../LayOut/AuthLayout/SignUp';
import ForgotPassword from '../LayOut/AuthLayout/ForgotPassword';
import OtpVerify from '../LayOut/AuthLayout/OtpVerify';
import ResetPassword from '../LayOut/AuthLayout/ResetPassword';
import Loader from '../LayOut/AuthLayout/Loader';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Create Account" component={SignUp} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OtpVerify} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="loader" component={Loader} />
    </Stack.Navigator>
  );
};

export default RootStack;
