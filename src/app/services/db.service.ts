import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosResponse } from '../components/shared/models/response/usuarios.response';
import { AccountResponse } from '../components/shared/models/response/account.response';
import { UsuariosRequest } from '../components/shared/models/request/usuarios.request';
import { TransacRequest } from '../components/shared/models/request/transac.request';
import { AccountRequest } from '../components/shared/models/request/account.request';
import { UserTokenRequest } from '../components/shared/models/request/user-token.request';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DbService {
  private urlBase = 'https://apigesbanc.herokuapp.com/api/v1';

  // private urlTransac = 'https://servicedesposit2020.herokuapp.com/api/transaction';
  private urlTransac = 'https://microservicetransactionv2.herokuapp.com/api/v2/transaction';
  tokenRoy: string;
  tokenJhil: string;
  constructor(private http: HttpClient) {
    this.leerToken();
    this.leerTokenJhil();

  }
  // guardar token en localStorage

  private guardarToken(token: string) {
    this.tokenRoy = token;
    localStorage.setItem('token', token);
  }
  private leerToken() {
    if ( localStorage.getItem('token')) {
      this.tokenRoy = localStorage.getItem('token');

    }
    return this.tokenRoy;

  }
  // end

  getClients(): Observable<UsuariosResponse[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenRoy }`
    });
    return this.http.get<UsuariosResponse[]>(`${this.urlBase}/listclients`, { headers });

  }


  getAccount(): Observable<AccountResponse[]> {
   const headers = new HttpHeaders({
    Authorization: `Bearer ${ this.tokenRoy }`
  });
   return this.http.get<AccountResponse[]>(`${this.urlBase}/listaccounts`, { headers });
  }
  getAccountByUser(num: string): Observable<AccountResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenRoy }`
    });
    return this.http.get<AccountResponse>(`${this.urlBase}/showaccount/${ num }`, { headers });
  }
  getAmount(num: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenRoy }`
    });
    return this.http.get(`${this.urlBase}/checkbalance/${ num }`, { headers });
  }

  toCreateTokenUser(data: UserTokenRequest) {
    return this.http.post(`${this.urlBase}/register`, data);
  }
  loginToken(data: UserTokenRequest) {
    return this.http.post(`${this.urlBase}/login`, data).pipe(
      map( res => {
        // this.tokenRoy = res['token'];
        // return this.tokenRoy;
        this.guardarToken(res['token']);
        return res;
      }
      ));
  }
  toCreateAccount(data: AccountRequest) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenRoy }`
    });
    return this.http.post(`${this.urlBase}/createaccount`, data, { headers });
  }
  toCreateUser(data: UsuariosRequest) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenRoy }`
    });
    return this.http.post(`${this.urlBase}/createclient`, data, { headers });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenJhil');
  }

  // servicios de jhil-----

  getTokenJhil(num: string) {
    return this.http.get(`${this.urlTransac}/token`).pipe(
      map( res => {
        this.guardarTokenJhil(res['token']);
        return res;
      }
      ));
  }
  private guardarTokenJhil(token: string) {
    this.tokenJhil = token;
    localStorage.setItem('tokenJhil', token);
  }
  private leerTokenJhil() {
    if ( localStorage.getItem('tokenJhil')) {
      this.tokenJhil = localStorage.getItem('tokenJhil');

    }
    return this.tokenJhil;

  }
  toDeposit(data: TransacRequest) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenJhil }`
    });
    return this.http.post(`${this.urlTransac}/deposit`, data, { headers });
  }
  toWithDraw(data: TransacRequest) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.tokenJhil }`
    });
    return this.http.post(`${this.urlTransac}/retirement`, data, { headers });
  }

}
