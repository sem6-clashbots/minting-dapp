# Prerequisites
- NPM OR YARN
- TRUFFLE
- METADATA OF NFTS
- LIST OF WHITELIST ADDRESSES

# QUICKSTART
Copy the .env.example => .env
Fill in the env file with data.

run npm and yarn
```
npm install
yarn
```

(optional) => command to change contract name
```
yarn rename-contract {name}
```

Change config data in: ./config/CollectionConfig.ts
```
L:14 - tokenName
L:15 - tokenSymbol
L:16 - hiddenMetadataUri
L:17 - maxSupply
L:17 - whitelistSale
L:17 - preSale
L:17 - publicSale
```

Start truffle dashboard
```
truffle dashboard
```

Deploy contract 
```
yarn deploy --network truffle
```

This will give an address back. Fill this in the config file in:
./config/CollectionConfig.ts

```
L:29 - contractAddress
```

start whitelist
```
yarn whitelist-open --network truffle
```

stop whitelist
```
yarn whitelist-close --network truffle
```

Verify contract
```
yarn verify 0xF7Ff07d880A1D791471FE1d29D9C5e64843ff512 --network truffle
```

reveal
```
yarn reveal --network truffle
```

Success!