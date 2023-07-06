import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import {useDispatch, useSelector} from 'react-redux';
import {storeToken} from './Src/Methods';
import Loader from './Src/LayOut/AuthLayout/Loader';
import {setToken, setLoader} from './Src/Store/Slices/AuthSlice';
import EncryptedStorage from 'react-native-encrypted-storage';

const App = () => {
  const myToken = useSelector(state => state.auth.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const checkLoginStatus = async () => {
    try {
      dispatch(setLoader(true));
      const token = await EncryptedStorage.getItem('ISLOGIN');

      if (token) {
        dispatch(setToken(token));
        // storeToken(token, dispatch);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {myToken ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
