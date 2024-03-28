pragma solidity 0.8.6;

import "../interfaces/ERC721/ERC721.sol";


contract supremeNFT is ERC721{

      string tokenUrls;


    constructor() ERC721("supreme NFT", "supreme"){
    }

    function _baseURI() internal view override returns (string memory) {
        return tokenUrls;
    }

    // 铸造函数
    function mint(address to,string memory tokenUrl) external {
        tokenUrls = tokenUrl;
        _mint(to);

    }

}
