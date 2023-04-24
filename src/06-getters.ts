export class MyDate{
  private _year: number;
  private _month: number;
  private _day: number;

  constructor(_year: number, _month: number, _day: number){
    this._year = _year;
    this._month = _month;
    this._day = _day;
  }

  //Agregando los comportamientos
  printFormat(): string {
    const _day = this.addPadding(this._day);
    const _month = this.addPadding(this._month);
    return `${_day}/${_month}/${this._year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return`0${value}`;
  }
  add(amount: number, type: 'days' | 'months' | 'year') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
        case 'months':
        this._month += amount;
        break;
        case 'year':
        this._year += amount;
        break;
    }
  }
  get day() {   //Este getter se comporta como una propiedad, solo que se pueden hacer mas acciones colocandole mas codigo
    //more code
    return this._day;
  }
  get isLeap_Year(): boolean {   //Siempre los get tienen que retornar un valor, esa es la definicion de un getter
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(2004,3,1);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeap_Year);