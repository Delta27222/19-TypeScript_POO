export abstract class Animal {    //Colocando esta clase como Abstract, lo que hacemos es que no se puedan
  protected name: string;         //directamente de Animal, sino que tenemos que usar una clase hija para
                                   //poder usarla.

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
  protected doSomething() {
    console.log('I am doing something');
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
      console.log(`Woof ${this.name}`);
    }
    super.doSomething();
  }
  move(time: number) {
    console.log('Moving as a dog..');
    super.move(time);
  }
}

//Si aca dejamos la creacion y muestra de algo en consola,
//donde llamemaos a estas clases automaticamente se mostrara
//lo que aca aparecia...VER commit anterior en este archivo
//para ver como se hacia antes de usar ABSTRACT