// Here i disabled the source value from destination.
function cal() {
  var sourcevalue = document.getElementById("source").value;
  var destinationgroup = document.getElementById("destination");
  var options = destinationgroup.getElementsByTagName("option");
  for (let i = 0; i < options.length; i++) {
    if (options[i].value == sourcevalue) {
      options[i].disabled = true;
    } else {
      options[i].disabled = false;
    }
  }
}
function val(){
    var destvalue = document.getElementById("destination").value;
  var sourcegroup = document.getElementById("source");
  var options = sourcegroup.getElementsByTagName("option");
  for (let i = 0; i < options.length; i++) {
    if (options[i].value == destvalue) {
      options[i].disabled = true;
    } else {
      options[i].disabled = false;
    }
    }
}
function valid(){
    let source=new Map();
    source.set('Mumbai',false);
    source.set('Delhi',false);
    source.set('Banglore',false);
    source.set('Pune',false);
    source.set('Noida',false);
    let dest=new Map();
    dest.set('Mumbai',false);
    dest.set('Delhi',false);
    dest.set('Banglore',false);
    dest.set('Pune',false);
    dest.set('Noida',false);

}