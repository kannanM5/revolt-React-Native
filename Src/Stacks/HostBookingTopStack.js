import CustomTopNavigation from '../Navigation/TopNavigation/CustomTopNavigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OverView from '../LayOut/DashboardLayout/HostBooking/OverView';
import Bookings from '../LayOut/DashboardLayout/HostBooking/PastBooking';
import PostBookings from '../LayOut/DashboardLayout/HostBooking/Bookings';

const HostBookingTopStack = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomTopNavigation {...props} />}>
      <Tab.Screen name="Overview" component={OverView} />
      <Tab.Screen name="Bookings" component={Bookings} />
      <Tab.Screen name="Past Bookings" component={PostBookings} />
    </Tab.Navigator>
  );
};

export default HostBookingTopStack;
