import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
      {/* <RootStack /> */}
    </NavigationContainer>
  );
};

export default App;
