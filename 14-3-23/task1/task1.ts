// Generics are used to make our componenets reusable i.e.. 
//Our functions and classes are reusable even our array as well .. 

// ***Generic class*****// 
class GenericClass<Type>
{
    inputNumber_1:Type
    inputNumber_2:Type
    inputNumber_3:Type
    constructor(inputNumber_1:Type,inputNumber_2:Type,inputNumber_3:Type)
    {
        this.inputNumber_1=inputNumber_1;
        this.inputNumber_2=inputNumber_2;
        this.inputNumber_3=inputNumber_3;
    }
    compare():void
    {
        if(this.inputNumber_1>this.inputNumber_2 && this.inputNumber_1>this.inputNumber_3)
        {
            console.log(this.inputNumber_1 +" is greater");
        }
        else if(this.inputNumber_2>this.inputNumber_1 && this.inputNumber_2>this.inputNumber_3)
        {
            console.log(this.inputNumber_2 +" is greater");
        }
        else
        {
            console.log(this.inputNumber_3);
        }
    }

}
    // We Used this generic class here to find graetest among the integers 
    let objectInteger = new GenericClass(12,15,47);
    objectInteger.compare();
    // Here We Used the Generic class to find greatest among float values 
    // Mean our generic class is reusable we don't have to write the code again for different datatype
    let objectFloat=new GenericClass(15.5,78.5,702.25);
    objectFloat.compare();
    // Similarly for Strings 
    let objectString=new GenericClass("vasu","vivek","ravi");
    objectString.compare();

// ******Functions*****// 
    function identity<Type>(arg:Type):Type
    {
    // Type-> Becomes generic, argument and return type are same->Type
    return arg;
    }
    console.log(identity(15));
    console.log(identity("hello There "));
    console.log(identity(true));
    console.log(identity(15.7575));
   //------------------!!!!!!!!!-----------//
    function test<Type1,Type2>(value1:Type1,value2:Type2):[Type1,Type2]
    {
    return [value1,value2];
    }
    let testValueStore=test<number,string>(96,"Vasu Tyagi");
    console.log(testValueStore);

//********* Generic Constarints *********/
    function testTwo<Type>(value:Type):Type
    {
    // console.log(value.length);
    // We get error Property 'length' does not exist on type 'Type'.
    return value;
    }
   // So the property should be used where it's applicable 
    //and this make our array reusable we can use it later as well
    function testThree<Type>(value:Type[]):Type[]
    {
    console.log(value.length);
    return value;
    }
    testTwo([10,15,20,23])
    testTwo(["name1","name2","name3","name4"])

//***********Interface*********/
    interface Student<Type1,Type2>{
        name:Type1;
        marks:Type2;

    }
    let ravi :Student<string,string> ={
        name:"ravi",
        marks:"96"

    }
    let vasu :Student<string,number> ={
        name:"vasu",
        marks:99.99

    }
    console.log(ravi);
    console.log(vasu);
    

