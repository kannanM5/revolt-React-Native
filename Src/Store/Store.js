import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './Slices/AuthSlice';

const store = configureStore({
  reducer: {
    Authication: AuthSlice,
  },
});

export default store;
