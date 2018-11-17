// solium-disable linebreak-style
pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract BlockchainEventToken is StandardToken {
  string public name = "BlockchainEvent";
  string public symbol = "BCE";
  uint8 public decimals = 0;
  string public version = "1.0";

  uint256 public INITIAL_SUPPLY = 100;
  uint256 public numTicketsSold = 0;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
  }

  function () external payable {
    uint256 weiAmount = msg.value;
    uint256 numTickets = weiAmount.div(uint256(10)**18);

    require(numTickets > 0, "Must purchase at least one ticket");
    require(numTicketsSold.add(numTickets) <= INITIAL_SUPPLY, "number of tickets sold is greater than max supply");

    balances[msg.sender] = balances[msg.sender].add(numTickets);
    numTicketsSold = numTicketsSold.add(numTickets);
  }

  function ticketsSold() public view returns (uint256) {
    return numTicketsSold;
  }
}