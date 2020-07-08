import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pokemon, RegisterData} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemom(id: number): Promise<Pokemon> {
    const path = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return this.httpClient.get<Pokemon>(path).toPromise();
  }

  postData(data: RegisterData): Promise<any> {
    const path = 'http://localhost:3000/api/user/';
    return this.httpClient.post<any>(path, data).toPromise();
  }
}
