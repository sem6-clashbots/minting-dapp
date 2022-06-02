import { ethers, BigNumber } from 'ethers';
import contractHumans from './contracts/humans/HumansCB.json';
import collectionConfigHumans from './contracts/humans/CollectionConfig';
import contractRobots from './contracts/robots/RobotsCB.json';
import collectionConfigRobots from './contracts/robots/CollectionConfig';

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      this.provider = new ethers.providers.Web3Provider(browserProvider);
      
      //HumansCB contract data
      const abiHumans = contractHumans.abi;
      this.humansContract = new ethers.Contract(
        collectionConfigHumans.contractAddress,
        abiHumans,
        this.provider.getSigner()
      )

      //RobotsCB contract data
      const abiRobots = contractRobots.abi;
      this.humansContract = new ethers.Contract(
        collectionConfigHumans.contractAddress,
        abiHumans,
        this.provider.getSigner()
      )
      
    } catch (err) {
      console.log("ERROR IN CONTRACT SETUP: " + err)
    }

    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};