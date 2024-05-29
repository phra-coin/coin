require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require('dotenv').config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    testnet: {
      url: 'https://data-seed-prebsc-2-s3.bnbchain.org:8545/',
      accounts: [`${process.env.PRIVATE_KEY}`] // Replace with your private key, securely managed
    }
  }
};
