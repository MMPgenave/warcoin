import { ChangeEvent, FormEvent, useState, type FC } from "react";
import { Page } from "@/components/Page.tsx";
import Tooltip from "@/components/Tooltip";

export const Trade: FC = () => {
  const [bet, setBet] = useState("");
  const [visible, setVisible] = useState(false);
  const [buyers, setBuyers] = useState(3);
  const [sellers, setSellers] = useState(7);
  const heightPercentage = (buyers / (buyers + sellers)) * 100;
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (Number(newValue) <= 500) {
      setBet(newValue);
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleBuyLong = () => {
    setBuyers((prev) => prev + 1);
  };

  const handleSellShort = () => {
    setSellers((prev) => prev + 1);
  };

  return (
    <Page>
      <div className="flex flex-col gap-6 items-center mt-[4rem] h-screen">
        <div className="flex flex-col  h-[15rem] w-1/2 ">
          <div
            style={{ height: `${heightPercentage}%` }}
            className={` bg-green-300  rounded-t-lg relative flex justify-center items-center `}
          >
            <div className=" font-extrabold text-green-600 text-xl">{heightPercentage}%</div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-gray-100 flex items-center gap-2">
              <div>warcoin</div>
              <i className="bi bi-coin"></i>
            </div>
          </div>
          <div
            style={{ height: `${100 - heightPercentage}%` }}
            className={`bg-red-400  rounded-b-lg flex justify-center items-center `}
          >
            <div className=" font-extrabold text-red-800 text-xl">{100 - heightPercentage}%</div>
          </div>
        </div>
        <form onSubmit={onSubmit} className=" flex flex-col gap-3">
          <Tooltip text="You can't bet more than 500." visible={visible}>
            <input
              type="number"
              placeholder="Amount"
              className=" rounded-sm text-xl p-2 text-gray-900"
              onChange={handleOnChange}
              value={bet}
            />
          </Tooltip>
          <div className=" text-lg mt-4">Avlbl:500</div>
          <div className=" flex items-center gap-4">
            <button type="button" onClick={handleBuyLong} className=" px-1 py-2 text-xl rounded-sm bg-green-300">
              Buy/Long
            </button>
            <button type="button" onClick={handleSellShort} className=" px-1 py-2 text-xl rounded-sm bg-red-300">
              Sell/Short
            </button>
          </div>
        </form>
        <div className=" flex flex-col gap-1 w-1/2">
          <div className=" flex gap-1 items-center text-gray-800 font-bold w-full">
            <div className=" rounded-tl-sm bg-gray-200 w-1/2 flex justify-center">Amount</div>
            <div className="rounded-tr-sm bg-gray-200 w-1/2 flex justify-center">Position</div>
          </div>
          <div className="rounded-b-sm bg-gray-200 h-20"></div>
        </div>
      </div>
    </Page>
  );
};
