class student{
    #name;
    #rollNo;
    #course;
    constructor(name,rollNo,course){
        this.#name=name;
        this.#course=course;
        this.#rollNo=rollNo;
    }
    get rollNo(){
        return  this.#rollNo;
    }
    get name(){
        return  this.#name;
    }
    get course(){
        return  this.#course;
    }
}
let studentdata= new student("Vasu","51","B.tech");
console.log(studentdata.name +" "+studentdata.rollNo+" "+studentdata.course);
//console.log(student.#name);
//error comes if we run this code beacuse the memeber is private
