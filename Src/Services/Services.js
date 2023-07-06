import axios from './Axios';

export const signUp = data => {
  return axios.post('/signup', data);
};

export const login = data => {
  return axios.post('/login', data);
};

export const logout = data => {
  return axios.post('/logout', data);
};

export const changepassword = data => {
  return axios.post('/changepassword', data);
};

export const forgotpassword = data => {
  return axios.post('/forgotpassword', data);
};

export const mobileotpverify = data => {
  return axios.post('/mobileotpverify', data);
};

export const resendotpverify = data => {
  return axios.post('/resendotpverify', data);
};

export const verifyresetpassword = data => {
  return axios.post('/verifyresetpassword', data);
};

export const updatewallet = data => {
  return axios.post('/updatewallet', data);
};

export const walletbalance = data => {
  return axios.post('/walletbalance', data);
};

export const productlist = data => {
  return axios.post('/productlist', data);
};

export const newsfeed = data => {
  return axios.post('/newsfeed', data);
};
