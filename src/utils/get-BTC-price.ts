import axios from "axios";

// Create a function to fetch posts
const fetchBitcoinPrice = async () => {
  const { data } = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  alert(`data in fetching is:${JSON.stringify(data, undefined, 2)}`);
  return data.bitcoin.usd;
};
export { fetchBitcoinPrice };
