import {ERC721} from "../lib/ERC721/ERC721.sol";
import {Ownable} from "../lib/Ownable.sol";

contract AdmitOne is ERC721, Ownable {
    constructor(address owner_) Ownable(owner_) {}

    function ownerMint(address to, uint256 tokenId) external onlyOwner {
        _mint(to, tokenId);
    }
}