import { ChangeEvent, FormEvent, useState, type FC } from "react";
import { Page } from "@/components/Page";
import Tooltip from "@/components/Tooltip";
import Timer from "@/components/Timer";
import Profit from "@/components/Profit";
import { useDispatch, useSelector } from "react-redux";
import {
  setBitcoinPriceAtTime0330,
  setBitcoinPriceAfter24Hrs,
  set_Show_Profit_Component,
} from "@/features/Trade/TradeSlice";
// import { useQuery } from "@tanstack/react-query";
import { fetchBitcoinPrice } from "@/utils/get-BTC-price";

export const Trade: FC = () => {
  // const { data, error, isLoading } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const isShowProfitComponent = useSelector((state) => state.Trade.isShowProfit_Component);
  const [inputvalue, setInputvalue] = useState("");
  const [bet, setBet] = useState(0);
  const [visible, setVisible] = useState(false);
  const [buyers, setBuyers] = useState(7);
  const [sellers, setSellers] = useState(3);
  const [string, setString] = useState("");
  const dispatch = useDispatch();

  // dispatch(incrementByAmount(Number(incrementAmount) || 0))
  const heightPercentage = ((buyers / (buyers + sellers)) * 100).toFixed(2);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (Number(newValue) <= 500) {
      setInputvalue(newValue);
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  async function setBitcoinPriceAtTwoDifferentTime() {
    const btcPrice = await fetchBitcoinPrice();
    alert(`btcPrice:${btcPrice}`);
    dispatch(setBitcoinPriceAtTime0330(Number(btcPrice)));
    setTimeout(async () => {
      const btcPrice = await fetchBitcoinPrice();
      dispatch(setBitcoinPriceAfter24Hrs(Number(btcPrice)));
      dispatch(set_Show_Profit_Component(true));
    }, 120000);
  }

  const handleBuyLong = async () => {
    setBuyers((prev) => prev + 1);
    setString("Buy");
    setBet(Number(inputvalue) * 3);
    setBitcoinPriceAtTwoDifferentTime();
    setInputvalue("");
  };

  const handleSellShort = async () => {
    setSellers((prev) => prev + 1);
    setString("Sell");
    setBet(Number(inputvalue) * 3);
    setBitcoinPriceAtTwoDifferentTime();
    setInputvalue("");
  };

  return (
    <Page>
      {isShowProfitComponent && <Profit />}
      <div className=" flex flex-col gap-3 items-center w-[60%] mt-[1.5rem]  float-start ml-[2rem]">
        <div className=" flex items-center gap-2 text-xl font-bold">
          <div className=" text-[#818285] ">Margin</div>
          <div className="flex items-center leading-0  text-[#000] bg-[#818285] size-7  justify-center  rounded ">
            3x
          </div>
        </div>
        <div className="flex flex-col items-center justify-center font-bold">
          <div className="flex flex-col h-[14rem] w-[90%] relative">
            <div
              style={{ height: `${heightPercentage}%` }}
              className={` bg-[#466142]  rounded-t-lg relative flex justify-center items-center `}
            >
              <div className=" font-extrabold text-[#5aba47] text-xl">{heightPercentage}%</div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[#d1d2d4] flex items-center gap-1 font-bold">
                <div>warcoin</div>
                <i className="bi bi-coin"></i>
              </div>
            </div>
            <div
              style={{ height: `${100 - Number(heightPercentage)}%` }}
              className={`bg-[#6c3b33]  rounded-b-lg flex justify-center items-center `}
            >
              <div className=" font-extrabold text-[#ed1c24] text-xl">
                {(100 - Number(heightPercentage)).toFixed(2)}%
              </div>
            </div>
            <div className=" absolute -right-20 top-1/2 text-[#a1a1a1] font-light -translate-y-1/2 w-16 h-6 bg-[#333333] rounded flex justify-center ">
              {string ? <Timer /> : "00:00"}
            </div>
          </div>
          <form onSubmit={onSubmit} className="  flex flex-col items-center mt-4 ">
            <div className="w-[70%]">
              <Tooltip text="You can't bet more than 500." visible={visible}>
                <input
                  type="number"
                  placeholder="Amount"
                  className=" rounded-lg w-[100%]  text-xl p-1 text-center placeholder-center text-[#818285] bg-[#d1d2d4]"
                  onChange={handleOnChange}
                  value={inputvalue}
                  disabled={Boolean(string)}
                />
              </Tooltip>
              <div className="  text-[#fff] ">Avbl:500</div>
            </div>
            <div className=" flex items-center justify-between gap-4 mt-2 text-[#fff] font-bold  w-[90%] ">
              <button type="button" onClick={handleBuyLong} className=" px-1 py-2 w-1/2  rounded-sm bg-[#67aa50]">
                Buy/Long
              </button>
              <button type="button" onClick={handleSellShort} className=" px-1 py-2 w-1/2  rounded-sm bg-[#be4130]">
                Sell/Short
              </button>
            </div>
          </form>
          <div className=" flex flex-col gap-1 w-[90%] mt-3">
            <div className=" flex gap-1 items-center text-gray-800 font-bold w-full">
              <div className=" rounded-tl-sm bg-[#d1d2d4] w-1/2 flex justify-center">Amount</div>
              <div className=" rounded-tr-sm bg-[#d1d2d4] w-1/2 flex justify-center">Position</div>
            </div>
            <div className="rounded-b-sm bg-[#d1d2d4] h-14 flex items-center">
              <div className="w-1/2 flex justify-center text-lg text-gray-700">{string && bet}</div>
              <div className="w-1/2 flex justify-center text-lg text-gray-700">{string && string}</div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
