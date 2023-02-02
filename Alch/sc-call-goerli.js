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
    to: "0x332C7aC34580dfEF553B7726549cEc7015C4B39b",
    value: Utils.parseEther("0"),
    data: "0xa9059cbb0000000000000000000000002239f90fc37236366e5bb4231fe5dff3d20e85ad0000000000000000000000000000000000000000000000000de0b6b3a7640000",
    gasLimit: "2100000",
    maxPriorityFeePerGas: Utils.parseUnits("1", "gwei"),
    maxFeePerGas: Utils.parseUnits("1", "gwei"),
    nonce: nonce,
    type: 2,
    chainId: 5,
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log("Sent transaction", tx);
}

main();
