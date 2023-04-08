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
  clientAccountBalanceSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.CLIENT_ACCOUNT_BALANCE, JSON.stringify(data), this.httpOptions)
  }
  BalanceOffSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.BALANCE_OFF, JSON.stringify(data), this.httpOptions)
  }
  transferSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.TRANSFER, JSON.stringify(data), this.httpOptions)
  }
  burnSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.BURN, JSON.stringify(data), this.httpOptions)
  }
  transactionsList(): Observable<any> {
    return this.http.get<any>(URLS.TRANSACTIONS_LIST, this.httpOptions)
  }
  erc20UsersList(): Observable<any> {
    return this.http.get<any>(URLS.ERC20_USERS, this.httpOptions)
  }
  appUserSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.APP_USER_SAVE, JSON.stringify(data), this.httpOptions)
  }

}


