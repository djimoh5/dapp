var infura_apikey = "jPtHmK9yhNvvA0U13RaF";

var WalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'orbit recall loan soda harsh can dirt border position garbage hurry shine then detail monkey';
var options = mnemonic;

module.exports = {
  networks: {
    mainnet: {
      provider:
        function() {
            return new WalletProvider(options, "https://mainnet.infura.io/" + infura_apikey)
        },
      network_id: 1,
      gas: 3000000
    },
    ropsten: {
      provider:
        function() {
          return new WalletProvider(options, "https://ropsten.infura.io/" + infura_apikey)
        },
      network_id: 3,
      gas: 3000000
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

//mm3thmb5$
//company area perfect top width foster task shine hint fix today card