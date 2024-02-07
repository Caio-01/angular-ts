// Funcoes
function addNumber(x: number, y: number): number {
  return x + y;
}
let soma: number = addNumber(4, 5);
console.log(soma);

function addToHello(name: string): string {
  return `Hello ${name}`;
}
console.log(addToHello("Caio"));

//Funcao Multi Tipos

function callTelefone(phone: string | number): number | string {
  return phone;
}

//Funcao async

async function getDataBase(id: number): Promise<string> {
  return "caio";
}
