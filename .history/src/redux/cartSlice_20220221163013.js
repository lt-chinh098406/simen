import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {},
    removeItemFromCart(state, action) {},
  },
});

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;