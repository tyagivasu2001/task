interface Student 
// interface name always strat with captital letter 
{  
    name:string;
    course:string;
    year:number; 
    cat:string;
    fee(): void,       
     
}
// enum are said to be named constant and are of two type string and number 
enum feecat{
    gen=120000,
    sc=80000,
    st=60000, 

}
const raj : Student = {
    name :"raj",
    course:"btech",
    year:1,
    cat:"gen",
    fee(){
        if(raj.cat=="gen"){
           console.log(feecat.gen);
        }
        else if(raj.cat=="sc"){
           console.log(feecat.sc);
        }
        else{
           console.log(feecat.st);
        }
       
        
   },

}
const ravi : Student = {
    name :"ravi",
    course:"btech",
    year:3,
    cat:"sc",
    fee(){
        if(ravi.cat=="gen"){
           console.log(feecat.gen);
        }
        else if(ravi.cat=="sc"){
           console.log(feecat.sc);
        }
        else{
           console.log(feecat.st);
        }
       
        
   },

}
const vivek : Student = {
    name :"vivek",
    course:"btech",
    year:2,
    cat:"st",
    fee(){
        if(vivek.cat=="gen"){
           console.log(feecat.gen);
        }
        else if(vivek.cat=="sc"){
           console.log(feecat.sc);
        }
        else{
           console.log(feecat.st);
        }
       
        
   },

}
console.log(raj.name);
console.log(raj.course);
console.log(raj.year);
console.log(raj.cat);
raj.fee();
console.log(ravi.name);
console.log(ravi.course);
console.log(ravi.year);
console.log(ravi.cat);
ravi.fee();
console.log(vivek.name);
console.log(vivek.course);
console.log(vivek.year);
console.log(vivek.cat);
vivek.fee();

