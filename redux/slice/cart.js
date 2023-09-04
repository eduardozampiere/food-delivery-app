import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.value = [...state.value, payload];
    },
    remove: (state, { payload }) => {
      const index = state.value.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
    empty: (state) => {
      state.value = [];
    },
  },
});

export const { add, remove, empty } = CartSlice.actions;

export const getCart = (state) => state.cart.value;

export const getCartTotal = (state) =>
  state.cart.value.reduce((accum, item) => (accum += item.price), 0);

export default CartSlice.reducer;
