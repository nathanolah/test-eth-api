import axios from "axios";

const Ethplorer_APIKEY = "EK-8yfkZ-tHSLQJ3-bSsNC";
const wethTokenAddr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const pepeTokenAddr = "0x6982508145454Ce325dDbE47a25d4ec3d2311933";
const usdcTokenAddr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

export async function getTokenInfo() {
  // create axios instance for http requests
  const axiosInstance = axios.create();

  const response = await axiosInstance.get(
    `https://api.ethplorer.io/getTokenInfo/${wethTokenAddr}?apiKey=${Ethplorer_APIKEY}`
  );

  console.log(response.data);
}
