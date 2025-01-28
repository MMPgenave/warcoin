/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

const Profit = () => {
  const firstBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAtTime0330);
  const secondBitcoinPrice = useSelector((state: any) => state.Trade.btcPriceAfter24Hrs);
  const profit = ((secondBitcoinPrice - firstBitcoinPrice) * 100) / firstBitcoinPrice;

  return <div>Profit:{profit}%</div>;
};

export default Profit;
