function cal(){
const element=document.getElementById("myDiv");
const nodes=element.getElementsByTagName("p");
document.getElementById("demo").innerHTML=nodes.length;
}