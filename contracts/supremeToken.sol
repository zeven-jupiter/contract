pragma solidity 0.8.6;


contract supremeToken{

    string private _name ;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;
    mapping (address => uint256) private _balance;
    mapping (address =>  mapping (address => uint256)) private _allowed;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    constructor() {
        _name = 'supreme Token';
        _symbol = 'supreme';
        _decimals = 8;
        _totalSupply = 10000 * (10 ** uint256(_decimals));
        _balance[msg.sender]=_totalSupply;
    }



    function name() public view virtual   returns (string memory name){
        name = _name;
    }

    function symbol() public view virtual   returns (string memory symbol){
        symbol = _symbol;
    }

    function decimals() public view virtual   returns (uint8 decimals){
        decimals = _decimals;
    }

    function totalSupply() public view virtual   returns (uint256 totalSupply){
        totalSupply = _totalSupply;
    }

    function balanceOf(address _owner) public view virtual   returns(uint256 balance){
        balance = _balance[_owner];
    }

    // 从任何调用者那里发送一定数量的代币到一个地址
    function transfer(address _to, uint _value) public virtual  payable returns(bool success){
        require(_to != address(0));
        require(_balance[msg.sender] >= _value);
        require(_balance[_to] + _value >= _balance[_to]);
        _balance[msg.sender] -= _value;
        _balance[_to] += _value;
        emit Transfer(msg.sender,_to,_value);
        success = true;
    }



    function transferFrom(address _from, address _to, uint256 _value) public virtual   returns (bool success){
        require(_balance[_from] >= _value);
        require(_allowed[_from][msg.sender] >= _value);
        _balance[_from] -= _value;
        _allowed[_from][msg.sender] -= _value;
        _balance[_to] += _value;
        emit Transfer(_from, _to, _value);
        success = true;
    }

    function approve(address _spender, uint256 _value) public virtual   returns (bool success){
        _allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        success = true;
    }

    function allowance(address _owner, address _spender) public view virtual   returns (uint256 remaining){
        remaining = _allowed[_owner][_spender];
    }
}
