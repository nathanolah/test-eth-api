import { Network, Alchemy, AssetTransfersCategory } from "alchemy-sdk";
import { ChainId, Token } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";

const settings = {
  apiKey: "j4gytswgJoRmdNKr0BO2q2fKE7Eu3qmF",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`);

const chainId = ChainId.MAINNET;
const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // must be checksummed
const decimals = 18;

const DAI = new Token(chainId, tokenAddress, decimals);

console.log(DAI);

// const getTransfer = async () => {
//   const data = await alchemy.core.getAssetTransfers({
//     fromBlock: "0x0",
//     fromAddress: "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
//     category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.ERC20],
//   });

//   console.log(data);
// };

// getTransfer();

// (async () => {

//   const data = await alchemy.core.getAssetTransfers({
//     fromBlock: "0x0",
//     fromAddress: "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
//     category: [
//       AssetTransfersCategory.EXTERNAL,
//       AssetTransfersCategory.INTERNAL,
//       AssetTransfersCategory.ERC20,
//       AssetTransfersCategory.ERC721,
//       AssetTransfersCategory.ERC1155,
//     ],
//   });

//   // list tokens

//   // console.log(data);
// })();
