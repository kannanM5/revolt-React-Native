import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import {Provider} from 'react-redux';
import store from './Src/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <MainStack /> */}
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <MainStack /> */}
//       <RootStack />
//     </NavigationContainer>
//   );
// };

export default App;
