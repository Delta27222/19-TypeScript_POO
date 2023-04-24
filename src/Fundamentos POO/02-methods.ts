export class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Agregando los comportamientos
  printFormat(): string {   //Aca indicamos que es lo que vamos a retornar
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(2000,3,28);
console.log(myDate.printFormat());
console.log('------------')
myDate.add(5, 'months');
console.log(myDate.printFormat());
