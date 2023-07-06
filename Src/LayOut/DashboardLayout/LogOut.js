import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Services/Services';
import {storeToken} from '../../Methods';
import Loader from '../AuthLayout/Loader';

const LogOut = () => {
  const myToken = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    removeUser();
  }, []);

  const removeUser = async () => {
    try {
      const removeUserData = EncryptedStorage.removeItem('ISLOGIN');
      storeToken(myToken, dispatch);
      let formData = new FormData();
      formData.append('token', removeUserData);
      logout(formData).then(res => {
        console.log(res);
      });
      console.log(removeUserData, 'removeUserData');
    } catch (error) {
      console.log(error);
    }
  };

  //   const removeUserData = async () => {
  //     try {
  //       let formData = new FormData();
  //       formData.append('token', myToken);
  //       await removeUser();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return <Text>Hello</Text>;
};

export default LogOut;

const styles = StyleSheet.create({});
