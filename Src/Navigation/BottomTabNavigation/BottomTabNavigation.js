import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomNavigation from './CustomBottomNavigation';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import WalletStack from '../../Stacks/WalletStack';
import ProductsStack from '../../Stacks/ProductsStack';
import NewsStack from '../../Stacks/NewsStack ';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => <CustomBottomNavigation {...props} />}>
      <Tab.Screen name="Navigate" component={DrawerNavigation} />
      <Tab.Screen name="WalletStack" component={WalletStack} />
      <Tab.Screen name="ProductsStack" component={ProductsStack} />
      <Tab.Screen name="NewsStack" component={NewsStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
