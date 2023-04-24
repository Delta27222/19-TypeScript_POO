export class MyDate{
  private year: number;
  private month: number;
  private _day: number;

  constructor(year: number, month: number, _day: number){
    this.year = year;
    this.month = month;
    this._day = _day;
  }

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
    return`0${value}`;
  }
  add(amount: number, type: '_days' | 'months' | 'year') {
    switch (type) {
      case '_days':
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
  get day() {   //Este getter se comporta como una propiedad, solo que se pueden hacer mas acciones colocandole mas codigo
    //more code
    return this._day;
  }
  get isLeapYear(): boolean {   //Siempre los get tienen que retornar un valor, esa es la definicion de un getter
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2004,3,1);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);