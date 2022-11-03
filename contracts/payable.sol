pragma solidity ^0.8.9;

contract Payable {

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

event Transfer(
    address indexed to,
    uint amount
);
    function sendEther(address payable to, uint amount) external payable {
        require(
            address(this).balance >= amount,
            " Insufficient Balance"
        );
        to.transfer(amount);
        emit Transfer(to, amount);
    }
}
