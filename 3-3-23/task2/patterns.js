function starpattern() {
  var str = "";
  //  need of String is that console print in next line to make it pattern i use a String
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (i == 1 || i == 5) {
        str += "*";
      } else {
        if (j == 1 || j == 5) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    str += "\n";
  }
  console.log(str);
}
function numberpatter() {
  var str = "";
  var printnum = 1;
  for (var i = 0; i <= 4; i++) {
    printnum = 1;
    for (var j = 0; j <= 8; j++) {
      if (j >= 4 - i && j <= 4 + i) {
        str += printnum.toString();
        printnum++;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
