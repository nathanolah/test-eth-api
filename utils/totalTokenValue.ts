import { BigNumber } from "bignumber.js";
import { Web3Wrapper } from "@0xproject/web3-wrapper";
import axios from "axios";

const quoteRequestHeaders = {
  "0x-api-key": "5656289d-ba2e-4b80-8f34-5261354c46a4",
};
const wethTokenAddr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const usdcTokenAddr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
//const pepeTokenAddr = "0x6982508145454Ce325dDbE47a25d4ec3d2311933";

//const DECIMALS = 18;
//const amount = Web3Wrapper.toBaseUnitAmount(new BigNumber(1), DECIMALS);
const ETH_BASE_UNIT = 1000000000000000000;
const ONE_USD = 1000000;

const quoteRequestParams = {
  sellToken: wethTokenAddr, // WETH
  buyToken: usdcTokenAddr, // USDC
  sellAmount: ETH_BASE_UNIT,
  // 1 USDC TO WETH
  // sellToken: usdcTokenAddr,
  // buyToken: wethTokenAddr,
  // sellAmount: ONE_USD,
};

export const getTotalTokenValue = async () => {
  try {
    const response = await axios.get("https://api.0x.org/swap/v1/quote", {
      params: quoteRequestParams,
      headers: quoteRequestHeaders,
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
  // --header '0x-api-key: 6bb6df8f-7f78-4a51-b4ac-de86b44d0ebe'
};

// 1 WETH to USDC
// 1000000000000000000 base amount for ETH
