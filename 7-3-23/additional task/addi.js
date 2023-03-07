var arr=[];
function cal(){
    var sourcevalue=document.getElementById("source").value;
    var destinationgroup=document.getElementById("destination");
    var options=destinationgroup.getElementsByTagName("option");
    for(let i=0;i<options.length;i++){
        if(options[i].value==sourcevalue){
        options[i].disabled=true;
        }
        else{
            options[i].disabled=false;
        }
    }
   
    

   
}