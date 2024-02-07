//classes

/*data modifiers
    public - pode acesar a propriedade do lado de fora(o mesmo em não passar nada)
    private - so pode ser acessado dentro da classe 
    protected - pode ver a propriedade dentro da classes e de sub-classes
*/
class Character {
  protected name?: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

//Cjaracter: superclass
//Magician: subclass
class Magician extends Character {
  magicPoints: number;

  constructor(
    name: string,
    stregth: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}

const p1 = new Character("miranha", 10, 98);
const p2 = new Magician('Mago', 10, 100, 100)
p1.attack();
p2.attack()
