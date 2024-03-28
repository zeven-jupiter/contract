pragma solidity 0.8.6;

abstract contract  ERC20 {
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    function name() public virtual view  returns (string memory name);
    function symbol() public virtual view  returns (string memory symbol);
    function decimals() public virtual view  returns (uint8 decimals);
    function totalSupply() public virtual view  returns (uint256 totalSupply);
    function balanceOf(address _owner) public virtual view  returns (uint256 balance);
    function transfer(address _to, uint256 _value) public virtual  returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) public virtual  returns (bool success);
    function approve(address _spender, uint256 _value) public virtual  returns (bool success);
    function allowance(address _owner, address _spender) public view virtual  returns (uint256 remaining);
}

