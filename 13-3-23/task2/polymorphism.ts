//polymorphism is the ability to create a class that has more than one form or many forms
//or classes have same methods but diffrent implimentation
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
let objDog=new Dog("tomy");
objDog.makeSound();
let objCat=new Cat("bali");
objCat.makeSound();
let objCow=new Cow("gori");
objCow.makeSound();
   