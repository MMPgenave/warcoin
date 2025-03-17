/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { CSSProperties } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUserWarcoin, setProfit, set_Show_Profit_Component } from "@/features/Trade/TradeSlice";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";

import profitPicture from "@/mmpassets/chart_up.png";
import lossPicture from "@/mmpassets/chart_down.png";

const Profit = () => {
  const dispatch = useDispatch();
  const firstBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAtTime0330);
  const secondBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAfter24Hrs);
  const profit = Number((((secondBitcoinPrice - firstBitcoinPrice) * 100) / firstBitcoinPrice).toFixed(4));
  const userCoins = useSelector((state: any) => state.Trade.userWarcoin);
  const bet = useSelector((state: any) => state.Trade.bet);
  const tradeType = useSelector((state: any) => state.Trade.tradeType);
  const isShowProfitComponent = useSelector((state: any) => state.Trade.isShowProfit_Component);

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
  // console.log("profit");
  return (
    <div className="">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={isShowProfitComponent}
        onClose={() => dispatch(set_Show_Profit_Component(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: 10 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: 288,
            bgcolor: "#151515",
            border: `2px solid ${profit > 0 ? "#4ACC1C" : "#EF5350"}`,
            boxShadow: 24,
            borderRadius: 1,
            p: 3,
          }}
        >
          <div className=" text-[32px] font-bold text-white">Bitcoin</div>
          <div className="flex items-center gap-1 ">
            <div className={` font-medium text-[14px] ${profit > 0 ? "text-primaryGreen" : " text-[#EF5350] "}`}>
              {tradeType}
              {tradeType === "Buy" ? "/Long" : "/Short"}
            </div>
            <div className="flex items-center  justify-center leading-0  text-[#fff] bg-[#282828] size-4   rounded text-[8px] font-medium ">
              3X
            </div>
          </div>
          <div className=" text-[15px] font-medium text-[#DBDBDB]">AMT:{bet}</div>
          <div className={` text-[32px] font-bold ${profit > 0 ? "text-primaryGreen" : "text-[#EF5350]"} `}>
            {profit}%
          </div>
          <img
            src={profit > 0 ? profitPicture : lossPicture}
            alt="profit-loss-picture"
            className="  absolute right-4 bottom-2"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Profit;
