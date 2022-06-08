import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks.ts';
import { openSea } from '../lib/Marketplaces.ts';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'RobotsCB',
  tokenName: 'RobotsCB',
  tokenSymbol: 'RCB',
  hiddenMetadataUri: 'ipfs://QmQpbCAUyt2CWTA54q8nWVX126fqbWNSuq2D1Js3ZdHr2e/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.04,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.04,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0x9b5FE14f5872daedeC41894e2415F7a92a833d7A",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
