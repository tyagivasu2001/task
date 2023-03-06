//Static keyword are used over properties and methods
// if a method or a property is set as static then
// there is no need to create the instance of class to call these
//and static variable are used for memory management as well
// because they create a single instance of variable for the class methods used it

class student {
  static collegeName = "College of Eng. Roorkee";
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  rollNo;
  name;
  get name() {
    return this.name;
  }
  get rollNo() {
    return this.rollNo;
  }
}
let obj = new student("Vasu", "51");
console.log(obj.name);
console.log(obj.rollNo);

// Here we have no need of object to show
//the value of our static variable
console.log(student.collegeName);

//NOw we take an example of static method
class person {
  name;
  mobileNumber;
  email;
  constructor(name, mobileNumber, email) {
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.email = email;
  }
  static feeMessage() {
    console.log("Please Submit Your Entrance Fee ");
  }
}
let PersonObj = new person("vasu", "123456789", "xyz@gmail.com");
console.log(
  PersonObj.name + " " + PersonObj.mobileNumber + " " + PersonObj.email
);
// as we can see here is no need of object
person.feeMessage();

// static blocks
// these blocks are execute as with the flow of program
class vehical {
  static {
    console.log("Start with keys");
  }
}
class bike extends vehical {
  static {
    console.log("Bike start with kick");
    console.log("bike have 2 tyre");
  }
}
// static keyword with private variables
class privateStaticClass{
 static #privateField=22;
 
 static publicStaticMethod(){
    console.log("public method called");
 }


}
class childern extends privateStaticClass{
   
    // either our field  is static but we cannt use it here

}
privateStaticClass.publicStaticMethod();

