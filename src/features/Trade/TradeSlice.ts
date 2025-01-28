import { createSlice } from "@reduxjs/toolkit";

export const TradeSlice = createSlice({
  name: "Trade",
  initialState: {
    btcPriceAtTime0330: 1,
    btcPriceAfter24Hrs: 2,
    isShowProfit_Component: false,
  },
  reducers: {
    setBitcoinPriceAtTime0330: (state, action) => {
      state.btcPriceAtTime0330 = action.payload;
    },
    setBitcoinPriceAfter24Hrs: (state, action) => {
      state.btcPriceAfter24Hrs = action.payload;
    },
    set_Show_Profit_Component: (state, action) => {
      state.isShowProfit_Component = action.payload;
    },
  },
});

export const { setBitcoinPriceAtTime0330, setBitcoinPriceAfter24Hrs, set_Show_Profit_Component } = TradeSlice.actions;

export default TradeSlice.reducer;
