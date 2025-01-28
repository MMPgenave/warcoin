/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { setUserWarcoin } from "@/features/Trade/TradeSlice";
import { useEffect } from "react";
const Profit = () => {
  const dispatch = useDispatch();
  const firstBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAtTime0330);
  const secondBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAfter24Hrs);
  const profit = ((secondBitcoinPrice - firstBitcoinPrice) * 100) / firstBitcoinPrice;
  const userCoins = useSelector((state: any) => state.Trade.userWarcoin);
  const bet = useSelector((state: any) => state.Trade.bet);
  const tradeType = useSelector((state: any) => state.Trade.tradeType);
  let newUserCoins;
  if (tradeType === "Sell") {
    newUserCoins = Number((-profit / 100) * bet) + Number(userCoins);
  } else {
    newUserCoins = Number((profit / 100) * bet) + Number(userCoins);
  }
  useEffect(() => {
    dispatch(setUserWarcoin(newUserCoins));
  }, []);

  return <div>Profit:{profit}%</div>;
};

export default Profit;
