import EncryptedStorage from 'react-native-encrypted-storage';
import {setToken} from './Store/Slices/AuthSlice';
import {SALT_KEY} from './Services/ServiceConstants';
import {FILESBASEURL} from './Utilities/Constants';

export const storeToken = async (token, dispatch) => {
  try {
    await EncryptedStorage.setItem('ISLOGIN', token);
    dispatch(setToken(token));
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = dispatch => {
  try {
    dispatch(setToken(null));
    EncryptedStorage.removeItem('ISLOGIN');
  } catch (error) {
    console.log(error);
  }
};

export const getAuthCode = (text = '') => {
  const sha1 = require('sha1');
  return sha1(SALT_KEY + text);
};

export const getUrlWithPrefix = (url = '') => {
  if (url) {
    if (
      url.includes('http') ||
      url.includes('file://') ||
      url.includes('content://')
    ) {
      return url;
    }
    return FILESBASEURL + url;
  }
  return '';
};
