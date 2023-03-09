function on_click(){
    alert('onclick method invoke')
}
function on_context(event){
     alert('you rigth clicked');
}
function on_dbclick(){
    document.getElementById("dbclick").innerHTML="you click twice";
}
function on_mousedown(){
    document.getElementById("mdown").innerHTML="you press mouse down";
}
function on_mousecenter(){
    let imag=document.getElementById("mcenter");
    imag.style.length="20px";
    imag.style.width="50px";
}
function on_mouseleave(){
    let imag=document.getElementById("mcenter");
    imag.style.length="200px";
    imag.style.width="150px";
}
function on_mousemove(){
    document.getElementById("mmove").innerHTML="you move curser";
}
function on_mouseout(){
doucument.getElementById("mmove").innerHTML=" you moved";
}
function on_mouseover(){
    document.getElementById("mover").innerHTML="you over mouse";
}
function on_mouseup(){
    document.getElementById("mup").innerHTML="Done";
}