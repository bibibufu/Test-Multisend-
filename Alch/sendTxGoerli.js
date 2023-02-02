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

  let transaction = {
    to: "0x94Ccded7bf952BCdf8AB81615b4139CF3FF0dbF4",
    value: Utils.parseEther("0.01"),
    gasLimit: "21000",
    maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
    maxFeePerGas: Utils.parseUnits("1", "gwei"),
    nonce: await alchemy.core.getTransactionCount(wallet.getAddress()),
    type: 2,
    chainId: 5,
  };


  let rawTransaction = await wallet.signTransaction(transaction);

  let tx = await alchemy.core.sendTransaction(rawTransaction);

  console.log("Sent transaction", tx);
}

main();
