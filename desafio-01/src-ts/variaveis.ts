//Tipos no Typescript

// Variaveis
//tipos primitivos: boolean, number, string

let ligado: boolean = false;
let nome: string = "caio";
let idade: number = 21;
let aultura: number = 1.8;

// tipos especiais: null undefined

let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos abrangentes: any, void
let retorno: void;
let retornoView: any; //aceita qualquer coisa

//objeto - sem previsibilidade
let produto: object = {
  name: "caio",
  cidade: "ba",
  idade: 21,
};

//objeto tipado - comm previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Sapato",
  preco: 100,
  unidades: 10,
};

//arrays
let dados: string[] = ["caio", "maria", "clara", "gabi"];
let dados2: Array<string> = ["caio", "maria", "clara", "gabi"];

let infos: (string | number)[] = ["caio", 21];

//Tuplas: *SO ACEITA QUANDO ESTIVER NA ORDEM
let boleto:[string, number, number] = ["agua conta", 1, 2]

//datas 
let aniversario: Date = new Date("2024-01-08 06:00")
console.log(aniversario.toString());

