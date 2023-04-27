export class URLS {
    private static IP = "http://localhost:8090/";
    public static API_KEY='8Z25jjwICnpzvrxQXJCVmw==';
    public static  TOKEN_ID='5bd99afb-10eb-4fe2-bf6d-13a9e87d3436';

   public static TOKEN_DETAILS = URLS.IP + "erc721/info";

   //erc721
   public static MINT = URLS.IP + "erc721/MintWithTokenURI";
   public static INITIALIZE = URLS.IP + "erc721/Initialize";
   public static OWNER_OFF = URLS.IP + "erc721/ownerOff";
   public static TRANSFER_FROM = URLS.IP + "erc721/TransferFrom";
   public static CLIENT_ACCOUNT_BALANCE = URLS.IP + "erc721/clientAccountBalance";
   public static BALANCE_OFF = URLS.IP + "erc721/balanceOff";
   public static BURN = URLS.IP + "erc721/burn";
   public static TRANSACTIONS_LIST = URLS.IP + "erc721/transactions";

   //app-user
   public static ERC721_USERS = URLS.IP + "erc721/users";
   public static APP_USER_SAVE = URLS.IP + "erc721/enroll";

   
}