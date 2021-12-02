import { ethers, Contract } from "ethers";
import Token from "./artifacts/contracts/Token.sol";

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();
        const token = new Contract(Token.address, Token.abi, signer);

        resolve({ signerAddress, token });
      }

      resolve({ signerAddress: signerAddress, token: token });
    });
  });

export default getBlockchain;