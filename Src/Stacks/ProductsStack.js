import Products from '../LayOut/DashboardLayout/Products';
import Product from '../LayOut/DashboardLayout/Product';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ProductsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PRODUCT" component={Products} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
