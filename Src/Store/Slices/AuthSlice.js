import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authCode: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setAuthCode: (state, action) => {
      state.authCode = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setAuthCode, setToken} = authSlice.actions;

export default authSlice.reducer;
