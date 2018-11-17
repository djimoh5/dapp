pragma solidity ^0.4.24;

import "./token/ERC20/PausableToken.sol";

contract TrilliamToken is PausableToken {
  string public name = "Trilliam";
  string public symbol = "TRIM";
  uint8 public decimals = 18;
  string public version = "1.0";

  uint256 public INITIAL_SUPPLY = 500 * (10**6) * (uint256(10)**decimals); //500M

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}