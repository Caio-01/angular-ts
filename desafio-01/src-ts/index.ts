//decorators
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __versionL: version });
  };
}

//attribute decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let __value = target[key];

    const getter = () =>'[play]' + __value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      }else{
        __value = value;
      }
    };

    Object.defineProperty(target, key,{
        get:getter,
        set:setter,
    })
  };
}

class Api {
  //@minLength(3) //Determinando o tamanho minimo da string
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("coe");
console.log(api.name);

