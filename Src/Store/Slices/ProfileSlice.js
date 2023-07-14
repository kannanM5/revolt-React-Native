import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileArr: [],
};

const profileSlice = createSlice({
  name: 'ProfileSlice',
  initialState,

  reducers: {
    setProfileArr: (state, action) => {
      state.profileArr = action.payload;
    },
  },
});

export const {setProfileArr} = profileSlice.actions;

export default profileSlice.reducer;
