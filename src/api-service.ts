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
        'token':'24'
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

}


