// Inheritance 

//    Inheritance is the property of inheriting the behaviour and property from another class 
//    the class that inherit the property are called child class or sub class and the class from 
//    which property is inhrit are called base class or parent class

// Types of Inheritnace in type script
// 1.Single Inheritance 
// 2.Multilevel Innheritance 
// single inheritance 
// wehn a class is inherited from a class that doesn't inherit any class
class Parent {
    sername:string;
    property:string;
    vehicals:number;
    constructor(sername:string,property:string,vehicals:number){
                this.sername=sername;
                this.property=property;
                this.vehicals=vehicals;
    }


}
class Child extends Parent {
display():void{
    console.log(this.sername);
    console.log(this.property);
    console.log(this.vehicals);
    
}
}
let obj12=new Child("Tyagi","2cr",5);
obj12.display();
// multileval inheritance 
// when inheritance occur in level A->B->C like that 
class Grandfather{
    height():void{
        console.log("My height is 6 feet ");
        
    }
    property():void{
        console.log(" 2cr property ");
    }
    

}
class Father extends Grandfather{
    
     newproperty():void{
        console.log(" 2+2= 4 cr property");
        
     }

}
class Me extends Father{
    study():void{
        console.log("I am the first graduate in my home ");
        
    }

}
let obj2=new Me();
obj2.height();
obj2.property();
obj2.newproperty();
obj2.study();

// There is no multiple inheritnace in typescript but we can achieve it using interface
// Multiple inheritance is that when inherit property from more than one class/interface
// here an example of multiple inheritance 
interface Person
{
    firstName:string;
    lastName:string;
    email:string;
    address:string;

}
interface Employee1
{
    empId:number;
    salary:number;

}
interface Developer1 extends Person,Employee1
{
    language:string;
    
 }
 const Myself :Developer1=
 {
    firstName:"Vasu",
    lastName:"Tyagi",
    email:"vasutyagi2001@gmail.com",
    address:"Noida",
    empId:51,
    salary:43000,
    language:"typescript"
 };
 console.log(Myself);
