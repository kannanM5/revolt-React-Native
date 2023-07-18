import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawerNavigation from './CustomDrawerNavigation';
import Charging from '../../LayOut/DashboardLayout/Charging';
import Manageprofile from '../../LayOut/DashboardLayout/Manageprofile';
import ManageVehicle from '../../LayOut/DashboardLayout/ManageVehicle';
import PaymentDetail from '../../LayOut/DashboardLayout/PaymentDetail';
import BookingScreen from '../../LayOut/DashboardLayout/Booking/BookingScreen';
import HistoryScreen from '../../LayOut/DashboardLayout/History/HistoryScreen';
import Reviews from '../../LayOut/DashboardLayout/Reviews';
import ShareApp from '../../LayOut/DashboardLayout/ShareApp';
import ReportIssue from '../../LayOut/DashboardLayout/ReportIssue';
import BecomeHost from '../../LayOut/DashboardLayout/BecomeHost';
import HostBookingScreen from '../../LayOut/DashboardLayout/HostBooking/HostBookingScreen';
import {ParkingScreen} from '../../LayOut/DashboardLayout/Parking/ParkingScreen';
import ChargingScreen from '../../LayOut/DashboardLayout/Charging/ChargingScreen';
import LogOut from '../../LayOut/DashboardLayout/LogOut';
import QRCodee from '../../LayOut/DashboardLayout/QRCodee';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigation {...props} />}>
      <Drawer.Screen name="Charging" component={Charging} />
      <Drawer.Screen name="ManageProfile" component={Manageprofile} />
      <Drawer.Screen name="Paymentdetail" component={PaymentDetail} />
      <Drawer.Screen name="BookingScreen" component={BookingScreen} />
      <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
      <Drawer.Screen name="AppReviewsRatings" component={Reviews} />
      <Drawer.Screen name="ShareApp" component={ShareApp} />
      <Drawer.Screen name="ReportIssue" component={ReportIssue} />
      <Drawer.Screen name="BecomeHost" component={BecomeHost} />
      <Drawer.Screen name="HostBookingScreen" component={HostBookingScreen} />
      <Drawer.Screen name="ParkingScreen" component={ParkingScreen} />
      <Drawer.Screen name="ChargingScreen" component={ChargingScreen} />
      <Drawer.Screen name="ManageVehicle" component={ManageVehicle} />
      <Drawer.Screen name="Logout" component={LogOut} />
      <Drawer.Screen name="QRCodee" component={QRCodee} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
