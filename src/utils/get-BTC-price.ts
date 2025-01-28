import axios from "axios";

// Create a function to fetch posts
const fetchBitcoinPrice = async () => {
  const { data } = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  // alert(`data in fetching is:${JSON.stringify(data.bpi.USD.rate_float)}`);
  return data.bpi.USD.rate_float;
};
export { fetchBitcoinPrice };
