import EncryptedStorage from 'react-native-encrypted-storage';
import {setToken} from './Store/Slices/AuthSlice';

export const storeToken = async (token, dispatch) => {
  try {
    await EncryptedStorage.setItem('ISLOGIN', token);
    dispatch(setToken(token));
  } catch (error) {
    console.log(error);
  }
};
