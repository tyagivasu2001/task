//polymorphism is the ability to create a class that has more than one form or many forms
//or classes have same methods but diffrent implimentation
//or very simply we can say doing a thing with many forms like tee 
class Animal{
    name:string
    constructor(name:string){
        this.name=name;
    }
    makeSound():void{
        console.log("Generic animal sound");
        
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log("bho!..bho!...");
        
    }
}
class Cat extends Animal{
    makeSound(): void {
        console.log("Meaow!...Meaow!...");
        
    }
}
class Cow extends Animal{
    makeSound(): void {
        console.log("mahhhh!....");
        
    }
}
class Snake extends Animal{
    makeSound(): void {
        console.log("sh!......");
        
    }
}
let objDog=new Dog("tomy");
objDog.makeSound();
let objCat=new Cat("bali");
objCat.makeSound();
let objCow=new Cow("gori");
objCow.makeSound();
let objSnake=new Snake("python");
objSnake.makeSound();
   
//Another Example 
// making a tea with different forms
class Tea{
    maketea():void{
        console.log("water +tea +milk");
        
    }
}
class Ravitea extends Tea{
    maketea(): void {
        console.log("water+ ilachi+ tea+ milk");
        
    }
}
class Vasutea extends Tea{
    maketea(): void {
        console.log("Water +ilachi +grnger+ tulsi +milk");
        
    }
}
let objRavi=new Ravitea();
objRavi.maketea();
let objvasu=new Vasutea();
objvasu.maketea();