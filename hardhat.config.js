require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/FCmdbh3NENXh8PaxdP0XCsvfPWOqyiDf`,
      accounts: [
        "069b7a5c9c91efecfa094fa525abd441a13002f7d75d88b4677cd4d12e6ef28d",
      ],
    },
  },
};
