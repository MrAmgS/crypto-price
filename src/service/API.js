import axios from "axios";

export const HomeAPI = async () => {
  const result = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return result.data.coins;
};

export const SearchedAPI = async (searchedCoin) => {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${searchedCoin}`
    );
    return result.data.coins;
  };
  
  export const ChartAPI = async (id) => {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=31&interval=daily`
    );
    const data = result.data.prices.map((prices) => {
      const [timestamp, p] = prices;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        data: date,
        price: p,
      };
    });
  
    return data;
  };