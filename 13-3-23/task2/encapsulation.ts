// Encpasulation is the property that binds the data and method together like ..class
//Encapsulation restrict anautherorized access by access modifiers
//1.public-> Can be acessiable from anywhere
//2.private->Can be acessiable with in the class
//3.protceted->Can be acessiable with in class and subclass

class Actions{
    private life=3;
    // We declare life private so that this value can't be changed and acessible
    readonly name:string;
    constructor(name:string){
        this.name=name; 
    } 
    shooted():void{
        if(this.life==0){
        console.log("Game Over");
        }
        else
        {
        this.life--;
        console.log(this.name+" is Shooted and have "+this.life+"Life");
        }
    }
}
class Player extends Actions{
    shoot():void{
    console.log(this.name +" Shooting Enemy ");
    }

}
class Enemy extends Actions{
    shooted(): void {
        console.log(this.name+" Shooting Player");
    }
}
let player=new Player("vasu");
player.shooted();
player.shoot();
let enemy=new Enemy("mario");
enemy.shooted();
enemy.shooted();
//Another Example
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
    //try to acess an element outside from its scope i.e.. private..
    
  }
}

let obj = new Company();
obj.display();
obj.displaySal();
