import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _jsonURL = 'assets/data/usuarios.json';

  constructor(private Http: HttpClient) {}

  getJson(): Observable<any> {
    return this.Http.get(this._jsonURL);
  }
}
