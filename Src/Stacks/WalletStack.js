import Wallet from '../LayOut/DashboardLayout/Wallet';
import AddMoney from '../LayOut/DashboardLayout/AddMoney';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const WalletStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WALLET" component={Wallet} />
      <Stack.Screen name="AddMoney" component={AddMoney} />
    </Stack.Navigator>
  );
};

export default WalletStack;
