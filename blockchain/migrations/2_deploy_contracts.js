const BlockchainEventToken = artifacts.require("./BlockchainEventToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(BlockchainEventToken);
};