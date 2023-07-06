import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  loading: null,
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.token = action.payload;
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setAuthCode, setToken, setLoader} = authSlice.actions;

export default authSlice.reducer;
