export class MyDate{

  constructor(
    public year: number = 2000,    //Si por alguna razon no me mandan los valores, se le colocan los valores por defecto indicados
    public month: number = 3,
    private _day: number = 28
  ){}

  //Agregando los comportamientos
  printFormat(): string {
    const _day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${_day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return`${value}`;
  }
  add(amount: number, type: 'days' | 'months' | 'year') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
        case 'months':
        this.month += amount;
        break;
        case 'year':
        this.year += amount;
        break;
    }
  }
  get_Day() {    //De esta manera podremos ver el valor de una variable que esta private
    return this._day;
  }
}

//Instancia de MyDate, pero con parametros
const myDate = new MyDate(2023,4,24);
console.log('(2023,4,24) => ' + myDate.printFormat());

//Instancia de MyDate, sin parametros
const myDate2 = new MyDate();
console.log('() => ' + myDate2.printFormat());

//Instancia de MyDate, con un solo parametro
const myDate3 = new MyDate(2040);
console.log('(2040) => ' + myDate3.printFormat());