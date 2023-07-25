import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  intro: false,
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setIntro: (state, action) => {
      state.intro = action.payload;
    },
  },
});

export const {setToken, setIntro} = authSlice.actions;

export default authSlice.reducer;
