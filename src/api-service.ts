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
        'token': '0a461920-3d82-4635-ba71-126c96e585ae'
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
  tokenInfo(username:any): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_DETAILS+"/"+username, this.httpOptions)
  }

  //erc20
  mint(data: any): Observable<any> {
    return this.http.post<any>(URLS.MINT, JSON.stringify(data), this.httpOptions)
  }
  transferFromSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.TRANSFER_FROM, JSON.stringify(data), this.httpOptions)
  }
  balanceOff(data: any): Observable<any> {
    return this.http.get<any>(URLS.BALANCE_OFF+"/"+data, this.httpOptions)
  }
  transfer(data: any): Observable<any> {
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


