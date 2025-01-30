/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { setUserWarcoin, setProfit } from "@/features/Trade/TradeSlice";
import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Profit = () => {
  const dispatch = useDispatch();
  const firstBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAtTime0330);
  const secondBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAfter24Hrs);
  const profit = Number((((secondBitcoinPrice - firstBitcoinPrice) * 100) / firstBitcoinPrice).toFixed(4));
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
    dispatch(setProfit(profit));
  }, []);
  return (
    <div className=" w-full absolute -left-[13rem] top-1/2 -translate-y-1/2">
      <Dialog>
        <DialogTrigger>
          <Button
            variant="outline"
            className="bg-[#d1d2d4]  px-4 py-1  font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Click to see youre profit
          </Button>
        </DialogTrigger>
        {profit > 0 ? (
          <DialogContent className={`w-full bg-cover bg-center h-screen bg-[url('@/mmpassets/chart_up.png')]`}>
            {" "}
            <DialogHeader>
              <DialogTitle className=" text-3xl font-bold text-slate-100">Bitcoin</DialogTitle>
              <div className="flex items-center gap-6 text-2xl ">
                <div className="text-mmpgreen">{tradeType}</div>
                <div className="   text-[#a49c9c]">3x</div>
              </div>
              <div className=" text-2xl text-slate-100">Amt:{bet}</div>
              <div className="text-[3.5rem] text-mmpgreen">{profit}%</div>
            </DialogHeader>
          </DialogContent>
        ) : (
          <DialogContent className="w-full bg-cover bg-center h-screen bg-[url('@/mmpassets/chart_down.png')]">
            {" "}
            <DialogHeader>
              <div className="flex items-center gap-10">
                <div>
                  <DialogTitle className=" text-3xl font-bold text-slate-100">Bitcoin</DialogTitle>
                  <div className="flex items-center gap-6 text-2xl ">
                    <div className="text-mmpred">{tradeType}</div>
                    <div className="   text-[#a49c9c]">3x</div>
                  </div>
                  <div className=" text-2xl text-slate-100">Amt:{bet}</div>
                </div>
                <div className="text-[3.5rem] text-mmpred">{profit}%</div>
              </div>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Profit;
