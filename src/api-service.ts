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
        'token':URLS.TOKEN_ID,
        'apiKey':URLS.API_KEY
      })
    }
  }

  tokenInfo(username:any): Observable<any> {
    return this.http.get<any>(URLS.TOKEN_DETAILS+"/"+username, this.httpOptions)
  }

  //erc20
  mint(data: any): Observable<any> {
    return this.http.post<any>(URLS.MINT, JSON.stringify(data), this.httpOptions)
  }
  initialize(data: any): Observable<any> {
    return this.http.post<any>(URLS.INITIALIZE, JSON.stringify(data), this.httpOptions)
  }
  ownerOff(data: any): Observable<any> {
    return this.http.get<any>(URLS.OWNER_OFF+"/"+data, this.httpOptions)
  }
  transferFromSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.TRANSFER_FROM, JSON.stringify(data), this.httpOptions)
  }
  balanceOff(data: any): Observable<any> {
    return this.http.get<any>(URLS.BALANCE_OFF+"/"+data, this.httpOptions)
  }
  clientAccountBalance(data: any): Observable<any> {
    return this.http.get<any>(URLS.CLIENT_ACCOUNT_BALANCE+"/"+data, this.httpOptions)
  }
  burnSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.BURN, JSON.stringify(data), this.httpOptions)
  }
  transactions(): Observable<any> {
    return this.http.get<any>(URLS.TRANSACTIONS_LIST, this.httpOptions)
  }
  users(): Observable<any> {
    return this.http.get<any>(URLS.ERC721_USERS, this.httpOptions)
  }
  appUserSave(data: any): Observable<any> {
    return this.http.post<any>(URLS.APP_USER_SAVE, JSON.stringify(data), this.httpOptions)
  }

}


