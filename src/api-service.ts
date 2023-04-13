import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Utility } from '../utility';
import { URLS } from './app/urls';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions: any
  httpOptions1: any
  blobHttpOptions: any
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': '28'
      })
    }
  }

  //token
  tokenList(data: any): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_LIST + "/" + data, this.httpOptions)
  }
  tokenSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.TOKEN_SAVE, JSON.stringify(data), this.httpOptions)
  }
  tokenListById(): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_DETAILS, this.httpOptions)
  }

  //erc20
  mintSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.MINT, JSON.stringify(data), this.httpOptions)
  }
  transferFromSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.TRANSFER_FROM, JSON.stringify(data), this.httpOptions)
  }
  initializeSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.INITIALIZE, JSON.stringify(data), this.httpOptions)
  }
  mintWithTokenURISave(data: any): Observable<any> {
    return this.http.post<any>(URLS.MINT_WITH_TOKEN_URI, JSON.stringify(data), this.httpOptions)
  }
  // clientAccountBalanceSave(data: any): Observable<any> {
  //   return this.http.post<any>(URLS.CLIENT_ACCOUNT_BALANCE, JSON.stringify(data), this.httpOptions)
  // }
  BalanceOffSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.BALANCE_OFF, JSON.stringify(data), this.httpOptions)
  }
  burnSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.BURN, JSON.stringify(data), this.httpOptions)
  }
  nftExistsList(): Observable<any> {
    return this.http.get<any>(URLS.NFT_EXISTS, this.httpOptions)
  }
  readNftList(): Observable<any> {
    return this.http.get<any>(URLS.READ_NFT, this.httpOptions)
  }
  clientAccountIDList(): Observable<any> {
    return this.http.get<any>(URLS.CLIENT_ACCOUNT_ID, this.httpOptions)
  }
  clientAccountBalance(): Observable<any> {
    return this.http.get<any>(URLS.CLIENT_ACCOUNT_BALANCE, this.httpOptions)
  }
  totalSupplyList(): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_SUPPLY, this.httpOptions)
  }
  tokenURIList(): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_URI, this.httpOptions)
  }
  tokenSymbolList(): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_SYMBOL, this.httpOptions)
  }
  tokeNameList(): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_NAME, this.httpOptions)
  }
  ownerOffList(): Observable<any> {
    return this.http.get<any>(URLS.OWNER_OFF, this.httpOptions)
  }
  balanceOffList(): Observable<any> {
    return this.http.get<any>(URLS.BALANCE_OFF, this.httpOptions)
  }

  // transactionsList(): Observable<any> {
  //   return this.http.get<any>(URLS.TRANSACTIONS_LIST, this.httpOptions)
  // }
  erc20UsersList(): Observable<any> {
    return this.http.get<any>(URLS.ERC20_USERS, this.httpOptions)
  }
  appUserSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.APP_USER_SAVE, JSON.stringify(data), this.httpOptions)
  }
  appUserList(): Observable<any> {
    return this.http.get<any>(URLS.APP_USER_LIST, this.httpOptions)
  }

}


