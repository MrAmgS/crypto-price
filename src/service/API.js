import axios from "axios";

export const HomeAPI = async () => {
  const result = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return result.data.coins;
};