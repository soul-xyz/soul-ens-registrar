import {ERC721} from "../lib/ERC721/ERC721.sol";
import {Ownable} from "../lib/Ownable.sol";

contract AdmitOne is ERC721, Ownable {

    string public name;
    string public symbol;

    constructor(address owner_) Ownable(owner_) {
        name = "Admit One";
        symbol = "A1";
    }

    function ownerMint(address to, uint256 tokenId) external onlyOwner {
        _mint(to, tokenId);
    }
}