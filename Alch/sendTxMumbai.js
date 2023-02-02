const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
const dotenv = require("dotenv");

dotenv.config();
const { API_KEY_MUMBAI, PRIVATE_KEY } = process.env;

const settings = {
  apiKey: API_KEY_MUMBAI,
  network: Network.MATIC_MUMBAI,
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
    value: Utils.parseEther("0.0001"),
    gasLimit: "21000",
    maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
    maxFeePerGas: Utils.parseUnits("2", "gwei"),
    nonce: nonce,
    type: 2,
    chainId: 80001,
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log("Sent transaction", tx);
}

main();
