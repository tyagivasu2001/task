class person{
    firstname:string;
    lastname:string;
    age:number;
    constructor(firstname:string,lastname:string,age:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;

    }

}
let obj1=new person("Summit","Sharma",21);
let obj2=new person("vijay","singh",31);
let obj3=new person("Sagar","gaur",26);

console.log(obj1.firstname+" "+obj1.lastname+" "+obj1.age+"<br>");
console.log(obj2.firstname+" "+obj2.lastname+" "+obj2.age+"<br>");
console.log(obj3.firstname+" "+obj3.lastname+" "+obj3.age+"<br>");



