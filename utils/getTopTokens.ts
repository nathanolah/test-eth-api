import axios from "axios";

const Ethplorer_APIKEY = "EK-8yfkZ-tHSLQJ3-bSsNC";

interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
  price: {
    bid: number;
    marketCapUsd: number;
  };
}

// Shows top 50 most active tokens for the last 30 days
export const topTokens = async () => {
  try {
    const res = await axios.get(
      `	https://api.ethplorer.io/getTopTokens?apiKey=${Ethplorer_APIKEY}`
    );

    const tokens = res.data.tokens;
    // console.log(tokens);
    //const { address, name, symbol, price: { bid, marketCapUsd } } = res.data.tokens
    const topTokens: TokenInfo[] = tokens.map(
      (token: {
        address: any;
        name: any;
        symbol: any;
        price: { bid: any; marketCapUsd: any };
      }) => ({
        address: token.address,
        name: token.name,
        symbol: token.symbol,
        price: {
          bid: token.price.bid,
          marketCapUsd: token.price.marketCapUsd,
        },
      })
    );

    // sort in desc order
    topTokens.sort((a, b) => b.price.marketCapUsd - a.price.marketCapUsd);

    topTokens.forEach((token) => {
      if (token.price.bid != undefined) {
        console.log(
          `${token.name}(${token.symbol}) | ${token.price.bid.toFixed(
            10
          )} | Market Cap: ${token.price.marketCapUsd} | ${token.address}`
        );
      }
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error: ", error.message);
    } else {
      console.error("Unexpected error occured: ", error);
    }
  }
};
