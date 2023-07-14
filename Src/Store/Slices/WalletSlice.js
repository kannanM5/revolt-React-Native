import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  walletAmount: 0,
  historyArr: [],
};

const walletSlice = createSlice({
  name: 'WalletSlice',
  initialState,

  reducers: {
    setWalletAmount: (state, action) => {
      state.walletAmount = action.payload;
    },
    setHistoryArr: (state, action) => {
      state.walletAmount = action.payload;
    },
  },
});

export const {setWalletAmount, setHistoryArr} = walletSlice.actions;

export default walletSlice.reducer;
