import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://fakestoreapi.com/products');
  }

  getProductById(id: String): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://fakestoreapi.com/products/' + id);
  }
}
