function varfunction(){
        var test=window.prompt("Enter the Input You Want to Give Your Variable");
        document.writeln("The value Assigned by you is:" +test+"<br>");
        function inner(){
            document.writeln("we change our variable value to 8  By Re-declare it inside a function" +"<br>");
            var test=8;
            console.log(test);
    
        }
        inner();
        document.writeln("we change our variable value  by Re-assign it to :50 "+"<br>")
        test=50;
        document.writeln(test +"<br>");
        document.writeln(variableisundifined);
        // here we get an output of undefined because we use it before its decleration 
        var variableisundifined=8;



}
function letfunction(){
    let test=window.prompt("Enter the Input You Want to Give Your let");
    document.writeln("The value Assigned by you is:" +test+"<br>");
    function inner(){
        document.writeln("we try change our variable By Re-declare but can't change because it is a let " +"<br>");
        let test=8;
        console.log(test);

    }
    inner();
    document.writeln("we change our variable value only by Re-assign it to :60 "+"<br>")
    test=60;
    document.writeln(test +"<br>");

}
function constfunction(){
    const test=window.prompt("Enter the Input You Want to Give Your Constant");
    document.writeln("The value Assigned by you is" +test+"<br>");
    
    document.writeln("we can't change our constant value" +"<br>");
    document.writeln(test +"<br>");

}