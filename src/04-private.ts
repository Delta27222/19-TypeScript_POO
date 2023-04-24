export class MyDate{
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Agregando los comportamientos
  printFormat(): string {   //Aca indicamos que es lo que vamos a retornar
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
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
        this.day += amount;
        break;
        case 'months':
        this.month += amount;
        break;
        case 'year':
        this.year += amount;
        break;
    }
  }
  getDay() {    //De esta manera podremos ver el valor de una variable que esta private
    return this.day;
  }
}

const myDate = new MyDate(2000,3,1);
console.log(myDate.printFormat());
console.log(myDate.getDay());