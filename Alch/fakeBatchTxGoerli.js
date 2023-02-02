const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
const dotenv = require("dotenv");

dotenv.config();
const { API_KEY_GOERLI, PRIVATE_KEY } = process.env;

const settings = {
  apiKey: API_KEY_GOERLI,
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(PRIVATE_KEY);

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
  ];

  for (const transaction of transactions) {
    let rawTransaction = await wallet.signTransaction(transaction);
    let tx = await alchemy.core.sendTransaction(rawTransaction);
    console.log("Sent transaction", tx);
  }
}

main();

