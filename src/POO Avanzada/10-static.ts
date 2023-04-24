//Version de Math de JS
console.log('Math.PI -> ' + Math.PI);
console.log('Math.max -> ' + Math.max(1,2,10,4,5,6));

class MyMath{
  static readonly PI: number = 3.1416;
  static max(...numbers: number[]): number {            //Haciendo uso del Static, logramos acceder sin tener que hacer una instancia del objeto
    return numbers.reduce((a, b) => a > b ? a : b);     // de la mimsa manera que Math de JS
  }
}
//Esta seria nuestra version de Math.PI
console.log('MyMath.PI -> ' + MyMath.PI);
console.log('MyMath.max -> ' + MyMath.max(1,2,12,13,5,2));