import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart";
import restaurantReducer from "./slice/restaurant";

export default configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});
