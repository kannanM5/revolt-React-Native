import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  homeList: [],
};

const homeSlice = createSlice({
  name: 'HomeSlice',
  initialState,

  reducers: {
    setHomeList: (state, action) => {
      state.homeList = action.payload;
    },
  },
});

export const {setHomeList} = homeSlice.actions;

export default homeSlice.reducer;
