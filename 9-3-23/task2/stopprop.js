function div1(){
  alert('Div1');
}
function div2(event){
    alert('Div2');
    if(document.getElementById("check").checked){
          event.stopPropagation();
    }
}