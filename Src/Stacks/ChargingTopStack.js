import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTopNavigation from '../Navigation/TopNavigation/CustomTopNavigation';
import ChargingAbout from '../LayOut/DashboardLayout/Charging/ChargingAbout';
import ChargingRatings from '../LayOut/DashboardLayout/Charging/ChargingRatings';

const ChargingTopStack = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomTopNavigation {...props} />}>
      <Tab.Screen name="About" component={ChargingAbout} />
      <Tab.Screen name="Ratings & Reviews" component={ChargingRatings} />
    </Tab.Navigator>
  );
};

export default ChargingTopStack;
