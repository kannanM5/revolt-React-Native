import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTopNavigation from '../Navigation/TopNavigation/CustomTopNavigation';
import ParkingAbout from '../LayOut/DashboardLayout/Parking/ParkingAbout';
import ParkingReviews from '../LayOut/DashboardLayout/Parking/ParkingReviews';

const ParkingTopStack = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomTopNavigation {...props} />}>
      <Tab.Screen name="About" component={ParkingAbout} />
      <Tab.Screen name="Ratings & Reviews" component={ParkingReviews} />
    </Tab.Navigator>
  );
};

export default ParkingTopStack;
