export class MyDate{
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Agregando los comportamientos
  public printFormat(): string {   //Aca indicamos que es lo que vamos a retornar
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'year') {
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

const myDate = new MyDate(2000,3,28);  //Ya que es de acceso publico, es posible hacer actualizaciones desde afuera
console.log(myDate);
myDate.day = 12;
console.log(myDate);
