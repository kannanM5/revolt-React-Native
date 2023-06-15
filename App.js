import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Src/LayOut/AuthLayout/Login';
import SignUp from './Src/LayOut/AuthLayout/SignUp';
import ForgotPassword from './Src/LayOut/AuthLayout/ForgotPassword';
import OtpVerify from './Src/LayOut/AuthLayout/OtpVerify';
import ResetPassword from './Src/LayOut/AuthLayout/ResetPassword';
import Charging from './Src/LayOut/DashboardLayout.js/Charging';
import Manageprofile from './Src/LayOut/DashboardLayout.js/Manageprofile';
import PaymentDetail from './Src/LayOut/DashboardLayout.js/PaymentDetail';
import {MyTabs} from './Src/LayOut/DashboardLayout.js/Booking/parking';
import Parking from './Src/LayOut/DashboardLayout.js/Booking/parking';
import BookParking from './Src/LayOut/DashboardLayout.js/History/Parking';
import Reviews from './Src/LayOut/DashboardLayout.js/Reviews';
import ShareApp from './Src/LayOut/DashboardLayout.js/ShareApp';
import ReportIssue from './Src/LayOut/DashboardLayout.js/ReportIssue';
import BecomeHost from './Src/LayOut/DashboardLayout.js/BecomeHost';
import OverView from './Src/LayOut/DashboardLayout.js/HostBooking/OverView';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawerContent from './Src/Navigation/CustomDrawerNavigation';
import CustomBottomContent from './Src/Navigation/CustomBottomNavigation';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Create Account"
        component={SignUp}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 24,
            color: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTP"
        component={OtpVerify}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 20,
            color: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Charging"
        component={Charging}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => (
        <CustomBottomContent {...props} screenOptions={{headerShown: false}} />
      )}>
      <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} />
      {/* <Tab.Screen name="ManageProfile" component={Manageprofile} /> */}
      {/* <Tab.Screen name="Paymentdetail" component={PaymentDetail} />
      <Tab.Screen name="Parking" component={Parking} />
      <Tab.Screen name="BookParking" component={BookParking} />
      <Tab.Screen name="AppReviewsRatings" component={Reviews} /> */}
    </Tab.Navigator>
  );
};

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Charging"
        component={Charging}
        // screenOptions={{
        //   headerShown: false,
        // }}
      />
      <Drawer.Screen
        name="ManageProfile"
        component={Manageprofile}
        options={{title: 'Manage Profile'}}
      />
      <Drawer.Screen name="Paymentdetail" component={PaymentDetail} />
      <Drawer.Screen name="Parking" component={Parking} />
      <Drawer.Screen name="BookParking" component={BookParking} />
      <Drawer.Screen name="AppReviewsRatings" component={Reviews} />
      <Drawer.Screen name="ShareApp" component={ShareApp} />
      <Drawer.Screen name="ReportIssue" component={ReportIssue} />
      <Drawer.Screen name="BecomeHost" component={BecomeHost} />
      <Drawer.Screen name="HostBooking" component={OverView} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
      {/* <RootStack /> */}
    </NavigationContainer>
  );
};

export default App;
