import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {
  API = 'http://localhost:3000/raffles';
  http = inject(HttpClient);

  constructor() {}

  buyRaffle(user: String): Observable<any>{
    return this.http.post(`${this.API}/buy`, {user});
  }

  drawRaffle(): Observable<any>{
    return this.http.get(`${this.API}/draw`);
  }

  getAllRaffles(): Observable<any> {
    return this.http.get(`${this.API}/`)
  }

}
