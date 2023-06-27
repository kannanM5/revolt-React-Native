import CustomTopNavigation from '../Navigation/TopNavigation/CustomTopNavigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BookParking from '../LayOut/DashboardLayout/History/Parking';
import BookCharging from '../LayOut/DashboardLayout/History/Charging';
import BookRestRoom from '../LayOut/DashboardLayout/History/RestRoom';

const HistoryTopStack = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <CustomTopNavigation {...props} />}>
      <Tab.Screen name="Parking" component={BookParking} />
      <Tab.Screen name="Charging" component={BookCharging} />
      <Tab.Screen name="Restroom" component={BookRestRoom} />
    </Tab.Navigator>
  );
};

export default HistoryTopStack;
