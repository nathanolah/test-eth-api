import { Network, Alchemy, AssetTransfersCategory } from "alchemy-sdk";
// import { ChainId, Token } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";
import { topTokens } from "../utils/getTopTokens";
import { getTotalTokenValue } from "../utils/totalTokenValue";
import { getTokenInfo } from "../utils/getTokenInfo";

// const settings = {
//   apiKey: "j4gytswgJoRmdNKr0BO2q2fKE7Eu3qmF",
//   network: Network.ETH_MAINNET,
// };
// const alchemy = new Alchemy(settings);

// Observer pattern
// Log token changes to User
interface Observer {
  //update(name: string, price: number): void;
  update(name: string, price: number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Concrete Subject
class Token implements Subject {
  private name: string;
  private price: number;
  private observers: Observer[] = [];

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.name, this.price);
    });
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  setPrice(price: number): void {
    if (this.price !== price) {
      this.price = price;
      this.notifyObservers();
    }
  }
}

// Concrete Observer
class User implements Observer {
  private name: string;
  private tokens: Token[] = [];

  constructor(name: string) {
    this.name = name;
  }

  update(name: string, price: number): void {
    if (this.tokens.some((token) => token.getName() === name)) {
      console.log(
        `Hello ${this.name}, ${name} price changed to ${price}. Logging to database...`
      );
    }
  }

  addToken(token: Token): void {
    this.tokens.push(token);
    token.registerObserver(this);
  }
}

(async () => {
  //topTokens();
  //getTotalTokenValue();
  //getTokenInfo();

  const bitcoin = new Token("Bitcoin", 50000);
  const ethereum = new Token("Ethereum", 2000);

  const user1 = new User("Alice");
  const user2 = new User("Bob");

  user1.addToken(bitcoin);
  user1.addToken(ethereum);
  user2.addToken(bitcoin);

  bitcoin.setPrice(55000); // Alice and Bob will be notified about Bitcoin price change
  ethereum.setPrice(2500);
})();
