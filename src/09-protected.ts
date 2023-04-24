export class Animal {
  protected name: string;               //Si el valor esta protected, solo se podra acceder dentro de las calses hijas

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
    console.log('I am doing something');    //Si el valor esta protected, solo se podra acceder dentro de las calses hijas
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
    super.doSomething();               //Es por esto que se esta haciendo uso aca, y no donde se hace la instancia
  }
  move(time: number) {
    console.log('Moving as a dog..');
    super.move(time);
  }
}
const roma = new Dog('Roma', 'Joely');
roma.makeSound(1);
roma.move(3);                        //Error -> Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
console.log(roma.bye());
