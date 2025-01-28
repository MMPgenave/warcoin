import { configureStore } from "@reduxjs/toolkit";
import TradeReducer from "./features/Trade/TradeSlice";
export default configureStore({
  reducer: { Trade: TradeReducer },
});
