export class MyService {
  private static instance: MyService | null = null;
  private _name: string;

  private constructor(_name: string) {
    this._name = _name;
  }

  getName() {
    return this._name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Se creo la instancia')
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Servicio 1');
console.log(myService1.getName());
const myService2 = MyService.create('Servicio 2');
console.log(myService2.getName());
const myService3 = MyService.create('Servicio 3');
console.log(myService3.getName());

console.log(myService1 === myService2);