export class Animal {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  //Methods
  move (time: number) {
    for (let index = 0; index < time; index++) {
      console.log('Moving...');
    }
  }
  gretting() {
    return `Hello, I'm ${this.name}`
  }
  bye() {
    return `Bye...`
  }
}

export class Dog extends Animal{
  owner: string;
  constructor(name: string, owner: string){
    super(name);
    this.owner = owner;
  }
  //Methods
  makeSound(time: number) {
    for (let index = 0; index < time; index++) {
      console.log('Woof!');
    }
  }
}

const simba = new Animal('Simba');  //Instancia de la clase Animal
console.log(simba.gretting());
simba.move(3);
console.log(simba.bye());

const roma = new Dog('Roma', 'Joely');   //Instancia de la clase Perro que extiende se la clase Animal
console.log('Name -> ' + roma.name);
console.log('Owner -> ' + roma.owner);
console.log(roma.gretting());
roma.move(5);
console.log(roma.makeSound(2));
console.log(roma.bye());