import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageScreens from '../LayOut/DashboardLayout/PageScreens';

const IntroStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PageScreens" component={PageScreens} />
    </Stack.Navigator>
  );
};

export default IntroStack;
