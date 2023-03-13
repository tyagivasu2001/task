// Encpasulation is the property that binds the data and method together like ..class
//Encapsulation restrict anautherorized access by access modifiers
//1.public-> Can be acessiable from anywhere
//2.private->Can be acessiable with in the class
//3.protceted->Can be acessiable with in class and subclass
class Empl {
  public name = "Vasu Tyagi";
  protected salary = 43000;
  private property = 300000000;
 
  display(): void { 

    console.log("I am from Shahranpur ");
    console.log("I works in Codestore Noida");
 
}
}
class Company extends Empl
 {
  displaySal(): void 
  {
    console.log(this.salary);
  }
}
class OtherPeople extends Empl 
{
  displayProp(): void {
    // console.log(this.property);
    // if we uncomment it will show error because we are 
    //try to acess an element from its scope i.e.. pprivate..
    
  }
}

let obj = new Company();
obj.display();
obj.displaySal();
