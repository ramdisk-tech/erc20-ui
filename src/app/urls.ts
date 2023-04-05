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
}