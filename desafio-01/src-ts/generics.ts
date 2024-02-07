//generics
//O exemplo do <T> é para definir um parametro especifico

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3])
const stgArray = concatArray<string[]>(['Caio', 'Feliz'], ['mermao'])
console.log(numArray);
console.log(stgArray);
