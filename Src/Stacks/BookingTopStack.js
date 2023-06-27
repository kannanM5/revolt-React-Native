import CustomTopNavigation from '../Navigation/TopNavigation/CustomTopNavigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chargings from '../LayOut/DashboardLayout/Booking/charging';
import Parking from '../LayOut/DashboardLayout/Booking/parking';

const BookingTopStack = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomTopNavigation {...props} />}>
      <Tab.Screen name="Charging" component={Chargings} />
      <Tab.Screen name="Parking" component={Parking} />
    </Tab.Navigator>
  );
};

export default BookingTopStack;
