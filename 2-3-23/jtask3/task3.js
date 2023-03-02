function cal(){
    var num=document.getElementById("inputnumber").value;
    // for loop iritates the element for a fixed number of time
    for(var i=2;i<=num;i++){
        if(getprimenumber(i)){
           document.writeln("Prime Number is:",+i+ "<br>")
        }

    }
    function getprimenumber(a){
        let i=2;
    //  while loop mostly used when we don't know the number of iterartion
        while(i<a){
            if(a%i==0){
                return false;
            }
            i++;
        }
        return true;
    }
    // there are two more loops in java Script those are 
    // 1.do while loop-> do while loop used when we have to execute the 
    // program and condition doesn't matter as much and there are two sections do
    //do {
    //    execution part
    //   } 
    // which do the execution and other is while which check the condition and loop
    //while{
        // condition
    //} 
    // execute one time more after condition false
    //  2.for in loops are used to itrates the elements of a containg array or ds
    // for(variables in object)
}  