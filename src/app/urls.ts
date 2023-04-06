export class URLS {
    private static IP = "http://localhost:8090/";
    // private static IP = "https://restapi.localho.st/";
    // public static LIST = URLS.IP + "list";
    // public static CREATE = URLS.IP + "create";
    // public static UPDATE = URLS.IP + "update";
    // public static DELETE = URLS.IP + "delete";

    //Token
   public static TOKEN_LIST = URLS.IP + "token/listByNetworkId";
   public static TOKEN_SAVE = URLS.IP + "token/save";
   public static TOKEN_DETAILS = URLS.IP + "erc20/info";

   //erc20
   public static MINT = URLS.IP + "erc20/mint";
   public static TRANSFER_FROM = URLS.IP + "erc20/transferFrom";
   public static CLIENT_ACCOUNT_BALANCE = URLS.IP + "erc20/clientAccountBalance";
   public static BALANCE_OFF = URLS.IP + "erc20/balanceOff";
   public static TRANSFER = URLS.IP + "erc20/transfer";
   public static BURN = URLS.IP + "erc20/burn";
}