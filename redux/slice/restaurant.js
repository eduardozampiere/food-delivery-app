import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    value: [],
  },
  reducers: {
    setRestaurant: (state, { payload }) => {
      state.value = { ...payload };
    },
  },
});

export const { setRestaurant } = RestaurantSlice.actions;
export const getRestaurant = (state) => state.restaurant.value;
export default RestaurantSlice.reducer;
