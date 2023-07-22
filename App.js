import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import RootStack from './Src/Stacks/RootStack';
import MainStack from './Src/Stacks/MainStack';
import {useDispatch, useSelector} from 'react-redux';
import {storeToken} from './Src/Utilities/Methods';
import Loader from './Src/LayOut/AuthLayout/Loader';
import EncryptedStorage from 'react-native-encrypted-storage';
import {removeToken} from './Src/Utilities/Methods';
import instance from './Src/Services/Axios';

const App = () => {
  const myToken = useSelector(state => state.auth.token);
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
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {myToken ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
