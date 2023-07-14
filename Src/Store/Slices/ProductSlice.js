import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
  cartList: [],
  cartCount: 0,
};

const authSlice = createSlice({
  name: 'ProductSlice',
  initialState,

  reducers: {
    setProductList: (state, action) => {
      state.productsList = action.payload;
    },

    setQuantity: (state, action) => {
      const {type, id} = action.payload;
      const refData = [...state.productsList];
      const refCartData = [...state.cartList];
      const index = refData.findIndex(ele => parseInt(ele.id) === parseInt(id));
      if (type === 'INCRE') {
        refData[index].Qty += 1;
        // state.cartCount += 1;
      } else if (type === 'DECRE' && refData[index].Qty > 1) {
        refData[index].Qty -= 1;
        // refData[index].cartCount -= 1;
      }
    },
    setCartList: (state, action) => {
      const refCartData = [...state.cartList];
      let productArr = action.payload;
      const ind = productArr.findIndex(e => e.id == refCartData.id);
      console.log(ind);
    },
  },
});

export const {setQuantity, setProductList, setCartList} = authSlice.actions;

export default authSlice.reducer;
