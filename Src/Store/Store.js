import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './Slices/AuthSlice';
import ProductSlice from './Slices/ProductSlice';
import WalletSlice from './Slices/WalletSlice';
import HomeSlice from './Slices/HomeSlice';
import ProfileSlice from './Slices/ProfileSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    product: ProductSlice,
    wallet: WalletSlice,
    home: HomeSlice,
    profile: ProfileSlice,
  },
});

export default store;
