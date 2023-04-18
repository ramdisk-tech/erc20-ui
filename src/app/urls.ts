export class URLS {
    private static IP = "http://localhost:8090/";
  public static API_KEY='8Z25jjwICnpzvrxQXJCVmw==';
 public static  TOKEN_ID='b13ee4e9-9dfc-4831-91f2-de0ca57ff8ea';

   public static TOKEN_DETAILS = URLS.IP + "erc1155/info";

   //erc1155
   public static MINT = URLS.IP + "erc1155/mint";
   public static TRANSFER_FROM = URLS.IP + "erc1155/transferFrom";
   public static CLIENT_ACCOUNT_BALANCE = URLS.IP + "erc1155/clientAccountBalance";
   public static BALANCE_OFF = URLS.IP + "erc1155/balanceOff";
   public static TRANSFER = URLS.IP + "erc1155/transfer";
   public static BURN = URLS.IP + "erc1155/burn";
   public static TRANSACTIONS_LIST = URLS.IP + "erc1155/transactions";

   //app-user
   public static ERC1155_USERS = URLS.IP + "erc1155/users";
  //  public static APP_USER_SAVE = URLS.IP + "erc20/enroll";
 }