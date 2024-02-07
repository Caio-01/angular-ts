//Interfaces (type x interface)
//* readonly serve apenas para ler, náo pode ser alterada no console *

type robot = {
  readonly id: number | string;
  name: string;
};

const bot1: robot = {
  id: 1,
  name: "megamen",
};

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot2: robot2 = {
    id: 1,
    name: "megamen",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2 {
  id: number | string;
  name: string;

  constructor(id: number | string, name: string) {
    this.id = id;
    this.name = name;
  }
    sayHello(): string {
       return `Hello i'am ${this.name}`
    }
}

const p = new Pessoa(1, "coe")
console.log(p.sayHello());

