const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
const dotenv = require("dotenv");

dotenv.config();
const { API_KEY_GOERLI, PK } = process.env;

const settings = {
  apiKey: API_KEY_GOERLI,
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(PK);

async function main() {
  const nonce = await alchemy.core.getTransactionCount(
    wallet.address,
    "latest"
  );

  let transactions = [
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce,
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 1,
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 2,
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 3,
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 4,
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 5, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 6, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 7, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 8, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 9, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 10, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 11, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 12, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 13, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 14, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 15, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 16, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 17, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 18, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 19, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 20, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 21, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 22, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 23, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
    {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 24, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 25, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 26, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 27, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 28, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 29, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 30, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 31, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 32, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 33, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 34, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 35, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 36, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 37, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 38, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 39, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 40, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 41, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 42, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 43, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 44, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 45, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 46, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 47, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 48, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 49, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 50, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 51, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 52, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 53, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 54, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 55, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 56, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 57, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 58, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 59, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 60, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 61, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 62, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 63, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 64, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 65, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 66, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 67, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 68, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 69, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 70, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 71, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 72, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 73, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 74, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 75, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 76, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 77, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 78, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 79, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 80, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 81, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 82, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 83, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 84, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 85, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 86, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 87, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 88, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 89, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 90, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 91, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 92, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 93, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 94, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 95, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 96, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 97, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 98, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 99, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 100, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 101, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 102, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 103, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 104, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 105, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 106, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 107, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 108, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 109, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 110, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 111, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 112, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 113, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 114, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 115, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 116, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 117, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 118, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    }, {
      to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
      value: Utils.parseEther("0"),
      data: "0x1249c58b",
      gasLimit: "2100000",
      maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
      maxFeePerGas: Utils.parseUnits("1", "gwei"),
      nonce: nonce + 119, // Make sure the nonce is unique for each transaction
      type: 2,
      chainId: 5,
    },
  ];

  for (const transaction of transactions) {
    let rawTransaction = await wallet.signTransaction(transaction);
    let tx = await alchemy.core.sendTransaction(rawTransaction);
    console.log("Sent transaction", tx);
  }
}

main();