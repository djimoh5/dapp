var BlockchainEventToken = artifacts.require("../contracts/BlockchainEventToken.sol")

contract('BlockchainEventToken', function(accounts) {
  var testAccount1 = accounts[1];
  var testAccount2 = accounts[2];

  it("Total Supply should equal 100", async function() {
    let token = await BlockchainEventToken.deployed();
    let supply = await token.totalSupply();
    
    var totalSupply = supply.valueOf();
    var amount = new web3.BigNumber(100);

    assert.equal(totalSupply, amount, `total supply (${totalSupply}) does not equal ${amount}`);
  });

  it("Sending 1 ETH should purchase one ticket", async function() {
    let token = await BlockchainEventToken.deployed();
    let ethAmt = 1;

    await token.sendTransaction({ from: testAccount1, value: web3.toWei(ethAmt, "ether")});
    let balance = await token.balanceOf(testAccount1);

    assert.equal(balance, ethAmt, `testAccount1 should own ${ethAmt} ticket`);
  });

  it("Sending 15 ETH should purchase 15 tickets", async function() {
    let token = await BlockchainEventToken.deployed();
    let ethAmt = 15;

    await token.sendTransaction({ from: testAccount2, value: web3.toWei(ethAmt, "ether")});
    let balance = await token.balanceOf(testAccount2);

    assert.equal(balance, ethAmt, `testAccount should own ${ethAmt} tickets`);
  });

  it("Tickets sold should equal 16", async function() {
    let token = await BlockchainEventToken.deployed();
    let ticketsSoldObj = await token.ticketsSold();
    
    var ticketsSold = ticketsSoldObj.valueOf();
    var amount = new web3.BigNumber(16);

    assert.equal(ticketsSold, amount, `tickets sold (${ticketsSold}) does not equal ${amount}`);
  });
});