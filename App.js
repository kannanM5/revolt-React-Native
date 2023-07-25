import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import IntroStack from './Src/Stacks/IntroStack';
import {useDispatch, useSelector} from 'react-redux';
import {storeIsIntro, storeToken} from './Src/Utilities/Methods';
import Loader from './Src/LayOut/AuthLayout/Loader';
import EncryptedStorage from 'react-native-encrypted-storage';
import {removeToken} from './Src/Utilities/Methods';
import instance from './Src/Services/Axios';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const myToken = useSelector(state => state.auth.token);
  const isIntro = useSelector(state => state.auth.intro);

  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);

  instance.interceptors.response.use(
    response => {
      if (response.data.status === -1) {
        removeToken(dispatch);
      }
      return response;
    },
    err => Promise.reject(err),
  );

  const checkLoginStatus = async () => {
    try {
      const token = await EncryptedStorage.getItem('ISLOGIN');
      if (token) {
        await storeToken(token, dispatch);
      }
      SplashScreen.hide();
      // setisLoading(false);
    } catch (error) {
      // setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <NavigationContainer>
      {isIntro ? myToken ? <MainStack /> : <RootStack /> : <IntroStack />}
    </NavigationContainer>
  );
};

export default App;
