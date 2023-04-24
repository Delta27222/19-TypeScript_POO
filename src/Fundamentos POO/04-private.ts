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
  printFormat(): string {   //Aca indicamos que es lo que vamos a retornar
    const _day = this.addPadding(this._day);
    const _month = this.addPadding(this._month);
    return `${_day}/${_month}/${this._year}`;
  }

  private addPadding(value: number) {   //No es necesario tenerlo como publico
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
  get_Day() {    //De esta manera podremos ver el valor de una variable que esta private
    return this._day;
  }
}

const myDate = new MyDate(2000,3,1);
console.log(myDate.printFormat());
console.log(myDate.get_Day());