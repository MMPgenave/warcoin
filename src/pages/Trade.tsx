/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState, type FC } from "react";
import Tooltip from "@/components/Tooltip";
import Timer from "@/components/Timer";
import StopWatch from "@/components/StopWatch";
import Profit from "@/components/Profit";
import coin from "@/mmpassets/Coin.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setTradingOpen,
  setBet,
  setTradeType,
  setBitcoinPriceAtTime0330,
  setBitcoinPriceAfter24Hrs,
  set_Show_Profit_Component,
} from "@/features/Trade/TradeSlice";
import Slider from "@mui/material/Slider";
import { Page } from "@/components/Page";
// import { useQuery } from "@tanstack/react-query";
import { fetchBitcoinPrice } from "@/utils/get-BTC-price";

export const Trade: FC = () => {
  const isShowProfitComponent = useSelector((state: any) => state.Trade.isShowProfit_Component);
  const userCoins: number = useSelector((state: any) => state.Trade.userWarcoin);
  const bet = useSelector((state: any) => state.Trade.bet);
  const isTradingOpen = useSelector((state: any) => state.Trade.isTradingOpen);
  const tradeType = useSelector((state: any) => state.Trade.tradeType);
  const [inputvalue, setInputvalue] = useState("");
  const [visible, setVisible] = useState(false);
  const [buyers, setBuyers] = useState(7);
  const [sellers, setSellers] = useState(3);
  const [sliderValue, setSliderValue] = useState(0);
  const dispatch = useDispatch();

  const heightPercentage = ((buyers / (buyers + sellers)) * 100).toFixed(2);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (Number(newValue) <= userCoins) {
      setInputvalue(newValue);
      const newSlidervalue = (Number(newValue) * 100) / userCoins;
      setSliderValue(newSlidervalue as number);
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  async function setBitcoinPriceAtTwoDifferentTime() {
    const btcPrice = await fetchBitcoinPrice();
    dispatch(setBitcoinPriceAtTime0330(Number(btcPrice)));
    setTimeout(async () => {
      const btcPrice = await fetchBitcoinPrice();
      dispatch(setBitcoinPriceAfter24Hrs(Number(btcPrice)));
      dispatch(set_Show_Profit_Component(true));
      dispatch(setTradingOpen(true));
      setSliderValue(0);
    }, 600000); // fetch btc price after 10 min
  }
  const handleBuyOrSell = async (trade_type: string) => {
    dispatch(setTradeType(trade_type));
    dispatch(setTradingOpen(false));
    dispatch(setBet(Number(inputvalue) * 3));
    setBitcoinPriceAtTwoDifferentTime();
    setInputvalue("");
  };
  const handleBuyLong = async () => {
    setBuyers((prev) => prev + 1);
    handleBuyOrSell("Buy");
  };

  const handleSellShort = async () => {
    setSellers((prev) => prev + 1);
    handleBuyOrSell("Sell");
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (((newValue as number) * userCoins) / 100 <= userCoins) {
      setInputvalue(String(((newValue as number) * userCoins) / 100) as string);
      setVisible(false);
    } else {
      setVisible(true);
    }

    setSliderValue(newValue as number);
  };

  return (
    <Page>
      <div className="  flex flex-col gap-0 items-center  pt-[25px] px-2 justify-center  ">
        {!isTradingOpen ? <Timer /> : <StopWatch hr="00" min="00" sec="00" color="blue" />}

        <div className=" mt-[30px] flex items-center gap-2 ">
          <div className=" text-[#fff] text-[20px] font-bold ">Margin</div>
          <div className="flex items-center  justify-center leading-0  text-[#fff] bg-[#737373] size-6   rounded text-[10px] font-medium ">
            3X
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-2  w-full">
          <div className="flex flex-col h-[14rem] w-[77%] ">
            <div
              style={{ height: `${heightPercentage}%` }}
              className={` bg-[#4ACC1C]/50  rounded-t-[4px] relative flex justify-center items-center `}
            >
              <div className=" font-extrabold text-[#4ACC1C] text-xl">{heightPercentage}%</div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[#d1d2d4] flex items-center gap-1 font-bold">
                <div className=" text-white text-[16px] font-medium ">WarCoin</div>
                {/* <i className="bi bi-coin"></i> */}
                <img src={coin} alt="coin" />
              </div>
            </div>
            <div
              style={{ height: `${100 - Number(heightPercentage)}%` }}
              className={`bg-[#EF5350]/50  rounded-b-[4px] flex justify-center items-center `}
            >
              <div className=" font-extrabold text-[#EF5350] text-xl">
                {(100 - Number(heightPercentage)).toFixed(2)}%
              </div>
            </div>

            {isShowProfitComponent && <Profit />}
          </div>
          <form onSubmit={onSubmit} className="  w-full flex flex-col items-center mt-6 ">
            <div className=" w-[90%] mb-10     ">
              <Tooltip text={`You can't bet more than ${userCoins} coins`} visible={visible}>
                <input
                  type="number"
                  placeholder="Amount"
                  className=" rounded-[8px] w-[100%] text-[14px] font-medium p-3 text-[#ffffff]/40 bg-[#282828]"
                  onChange={handleOnChange}
                  value={inputvalue}
                  disabled={!isTradingOpen}
                />
              </Tooltip>
              <div className="  text-[#fff]/50 font-medium text-[10px] ml-3 mt-1 ">Available:{userCoins}</div>
            </div>
            <div className="  w-full px-8">
              <Slider
                value={typeof sliderValue === "number" ? sliderValue : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                valueLabelDisplay="on"
                valueLabelFormat={(value) => `${value}%`}
                disabled={!isTradingOpen}
                // color="success"
              />
            </div>
            <div className=" flex items-center justify-between gap-4 mt-4 text-[14px] font-medium   w-[90%] ">
              <button
                type="button"
                disabled={!isTradingOpen || sliderValue === 0}
                onClick={handleBuyLong}
                className={`px-1 py-2 w-1/2  rounded-[4px] bg-primaryGreen  text-black  ${
                  !isTradingOpen || sliderValue === 0 ? "opacity-60" : "opacity-100"
                }`}
              >
                Buy/Long
              </button>
              <button
                type="button"
                disabled={!isTradingOpen || sliderValue === 0}
                onClick={handleSellShort}
                className={`px-1 py-2 w-1/2 rounded-[4px] bg-[#EF5350] text-white ${
                  !isTradingOpen || sliderValue === 0 ? "opacity-60" : "opacity-100"
                }`}
              >
                Sell/Short
              </button>
            </div>
          </form>
          <div className=" mt-6 w-full h-2 gradient-to-center-gray "></div>
          <div className=" relative flex flex-col  w-[90%] mt-4 px-6">
            <div className=" flex  items-center text-white font-semibold text-[10px] w-full border-b-[2px] border-[#242D39] pb-2">
              <div className="  w-1/2 flex justify-center">Amount</div>
              <div className="   w-1/2 flex justify-center">Position</div>
            </div>
            <div className="  h-14 flex items-center text-[14px] font-bold ">
              <div className="w-1/2 flex justify-center text-white  ">{!isTradingOpen && bet}</div>
              <div
                className={`w-1/2 flex justify-center ${
                  tradeType === "Buy" ? "text-primaryGreen " : "text-[#EF5350]"
                } `}
              >
                {!isTradingOpen && tradeType}
              </div>
            </div>
            <div className=" absolute w-[2px] h-[100px] left-[50%] transform -translate-x-1/2 bg-gradient-to-b from-[#647E9F]/60 to-[#242D39] "></div>
          </div>
        </div>
      </div>
    </Page>
  );
};
