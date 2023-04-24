const date = new Date();    //Creamos una instancia de Date, osea date
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12);
date.getHours();
date.getTime();
date.toISOString();

console.log(date);
console.log(date2);

class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
      this.year = year;
      this.month = month;
      this.day = day;
  }
}

const myDate = new MyDate(2000,3,28);
console.log('MyDate-----')
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
console.log('MyDate-----')
