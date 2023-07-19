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

export const mywallethistory = data => {
  return axios.post('/mywallethistory', data);
};

export const productlist = data => {
  return axios.post('/productlist', data);
};

export const addtocart = data => {
  return axios.post('/addtocart', data);
};

export const newsfeed = data => {
  return axios.post('/newsfeed', data);
};

export const stations = data => {
  return axios.post('/stations', data);
};

// 18. Nearest Stations

export const neareststations = data => {
  return axios.post('/neareststations', data);
};

//19. App User Review

export const review = data => {
  return axios.post('/review', data);
};

// 6. Get My Profile

export const getmyprofile = data => {
  return axios.post('/getmyprofile', data);
};

// 7. Update My Profile

export const updatemyprofile = data => {
  return axios.post('/updatemyprofile', data);
};

// 46. Add vehicle

export const addvehicle = data => {
  return axios.post('/addvehicle', data);
};

// 27. Social Media login/signup

export const sociallogin = data => {
  return axios.post('/sociallogin', data);
};

export const listvehicle = data => {
  return axios.post('/listvehicle', data);
};

// 48. Delete vehicle

export const deletevehicle = data => {
  return axios.post('/deletevehicle', data);
};

// 47. Edit vehicle

export const editvehicle = data => {
  return axios.post('/editvehicle', data);
};

// 73. Delete user

export const deleteuser = data => {
  return axios.post('/deleteuser', data);
};
