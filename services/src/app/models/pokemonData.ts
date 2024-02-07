export type PokemonData = {
  //Criando um Filtro do pokemon, só o que precisa
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };

  //pegando a mesma formatação da API
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
