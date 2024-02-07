import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //Propriedades
  private baseURL: string = '';
  private pokeData: PokemonData | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi; //Chamando a API
  }

  //Metódos
  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`); //Concatenando a URL com o nome do Pokemon
    return this.pokeData;
  }
}
