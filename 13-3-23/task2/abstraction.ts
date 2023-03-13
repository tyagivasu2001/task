//Abstraction is the process of hiding lower level details and expose only the essential details
// we an achecied abstraction by abstract class
abstract class Employee {
  name: string;
  totalHour: number;
  constructor(name: string, totalHour: number) {
    this.name = name;
    this.totalHour = totalHour;
  }
  public abstract calcuateSlary(): number;
}

class Fullemployee extends Employee {
  ratePerHour: number;
  constructor(totalHour: number, name: string, ratePerHour: number) {
    super(name, totalHour);
    this.ratePerHour = ratePerHour;
  }
  public calcuateSlary(): number {
    return this.totalHour * this.ratePerHour;
  }
}

class Intern extends Employee {
  ratePerHour: number;
  constructor(totalHour: number, name: string, ratePerHour: number) {
    super(name, totalHour);
    this.ratePerHour = ratePerHour;
  }
  public calcuateSlary(): number {
    return this.totalHour * this.ratePerHour;
  }
}
let contractor = new Intern(10, "Ramesh", 5);
let fullTimeEmployee = new Fullemployee(12, "monu", 8);

console.log(contractor.calcuateSlary());
console.log(fullTimeEmployee.calcuateSlary());
