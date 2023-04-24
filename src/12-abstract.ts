import { Animal, Dog } from './09-protected';

// const animal = new Animal('Roma');       Animal por ser una clase ABSTRACTA, no permite crear una instancia de esta clase directamente
// console.log(animal.gretting());          se necesita crear clases hijas que la extiendan

const simba = new Dog('Simba', 'Angel')    //Es por esto que aca en este caso, no da error. Ya que se esta creando una instancia de la clase Dog
console.log(simba.gretting());             //que extiende de la clase Animal
simba.makeSound(2);