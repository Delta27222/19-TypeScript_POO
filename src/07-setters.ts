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
    return`${value}`;
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
  //Getters
  get day() {
    //more code
    return this._day;
  }
  get isLeap_Year(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }

  //Setters
  set day(value: number) {    //Por definicion los setters son void
    if (value < 1 || value > 31) {
      throw new Error('Invalid day');
    }
    this._day = value;
  }
  set month(value: number) {    //Por definicion los setters son void
    if (value < 1 || value > 12) {
      throw new Error('Invalid month');
    }
    this._month = value;
  }
}

const myDate = new MyDate(2004,3,1);
console.log('No seteado -> ' + myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeap_Year);
myDate.month = 445;
console.log('Seteado -> ' + myDate.printFormat());