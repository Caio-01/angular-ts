import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //Propriedades
  pokemon: PokemonData = {
    //Inicializando o Objeto para reverter erros (poderia ser no constructor)
    id: 0,
    name: '',
    sprites: {
      front_default: '',
    },
    types: [],
  };

  constructor(private service: PokemonService) {}

  //Metódos
  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string) {
    console.log(searchName);
    //Promise
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        //chamando as características do API para o this.pokemon
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
        // console.log(res);
        // console.log(res.types);
        // console.log(this.pokemon);
      },
      error: (err) => console.log('not found'),
    });
  }
}
