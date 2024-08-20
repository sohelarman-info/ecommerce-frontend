import priceSlice from "./priceSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    totalPrice: priceSlice,
  },
});

export default store;
