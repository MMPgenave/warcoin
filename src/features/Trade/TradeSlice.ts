import { createSlice } from "@reduxjs/toolkit";

export const TradeSlice = createSlice({
  name: "Trade",
  initialState: {
    userWarcoin: 500,
    isTradingOpen: true,
    bet: 0,
    tradeType: "",
    btcPriceAtTime0330: 1,
    btcPriceAfter24Hrs: 2,
    isShowProfit_Component: false,
    profit: 0,
  },
  reducers: {
    setUserWarcoin: (state, action) => {
      state.userWarcoin = action.payload;
    },
    setTradingOpen: (state, action) => {
      state.isTradingOpen = action.payload;
    },
    setBet: (state, action) => {
      state.bet = action.payload;
    },
    setTradeType: (state, action) => {
      state.tradeType = action.payload;
    },
    setBitcoinPriceAtTime0330: (state, action) => {
      state.btcPriceAtTime0330 = action.payload;
    },
    setBitcoinPriceAfter24Hrs: (state, action) => {
      state.btcPriceAfter24Hrs = action.payload;
    },
    set_Show_Profit_Component: (state, action) => {
      state.isShowProfit_Component = action.payload;
    },
    setProfit: (state, action) => {
      state.profit = action.payload;
    },
  },
});

export const {
  setUserWarcoin,
  setTradingOpen,
  setBet,
  setTradeType,
  setBitcoinPriceAtTime0330,
  setBitcoinPriceAfter24Hrs,
  set_Show_Profit_Component,
  setProfit,
} = TradeSlice.actions;

export default TradeSlice.reducer;
