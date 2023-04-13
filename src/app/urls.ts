export class URLS {
    private static IP = "http://localhost:8090/";

    //Token
   public static TOKEN_LIST = URLS.IP + "token/listByNetworkId";
   public static TOKEN_SAVE = URLS.IP + "token/save";
   public static TOKEN_DETAILS = URLS.IP + "erc20/info";

   //erc721
   public static MINT = URLS.IP + "erc721/mint";
   public static TRANSFER_FROM = URLS.IP + "erc721/transferFrom";
   public static CLIENT_ACCOUNT_BALANCE = URLS.IP + "erc20/clientAccountBalance";
   public static BALANCE_OFF = URLS.IP + "erc721/balanceOff";
   public static OWNER_OFF = URLS.IP + "erc721/ownerOff";
   public static BURN = URLS.IP + "erc721/burn";
   public static TOKEN_NAME = URLS.IP + "erc721/tokeName";
   public static TOKEN_SYMBOL = URLS.IP + "erc721/tokenSymbol";
   public static TOKEN_URI = URLS.IP + "erc721/tokenURI";
   public static TOKEN_SUPPLY = URLS.IP + "erc721/totalSupply";
   public static INITIALIZE = URLS.IP + "erc721/Initialize";
   public static MINT_WITH_TOKEN_URI = URLS.IP + "erc721/MintWithTokenURI";
   public static CLIENT_ACCOUNT_ID = URLS.IP + "erc721/ClientAccountID";
   public static READ_NFT = URLS.IP + "erc721/readNft";
   public static NFT_EXISTS = URLS.IP + "erc721/nftExists";

   //app-user
   public static ERC20_USERS = URLS.IP + "erc20/users";
   public static APP_USER_SAVE = URLS.IP + "erc20/enroll";
   public static APP_USER_LIST = URLS.IP + "app-user/listAll";
}