"use client";
import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "TotalPrice",
  initialState: {
    Price: 0,
  },
  reducers: {
    totalPrice: (state, actions) => {
      state.Price = actions.payload;
    },
    priceIncrements: (state, actions) => {
      state.Price += actions.payload;
    },
    priceDecriment: (state, actions) => {
      state.Price -= actions.payload;
    },
  },
});

export const { totalPrice, priceIncrements, priceDecriment } =
  priceSlice.actions;
export default priceSlice.reducer;
