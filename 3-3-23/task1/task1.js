function trycatchmethod() {
  try {
    var a = 34;
    document.writeln(a + "<br>");
    document.writeln(b + "<br>");
  } catch (err) {
    document.writeln("There is an error:" + " " + err.message);
  }
}
function throwmethod() {
  var Age = window.prompt("Enter Your Age");
  try {
    if (Age >= 18) {
      throw "You are aligible";
    } else {
      throw "You are Under Age For Voting";
    }
  } catch (err) {
    document.writeln(err);
  }
}
function finallymethod() {
  try {
    var a = 34;
    document.writeln(a + "<br>");
    document.writeln(b + "<br>");
  } catch (err) {
    document.writeln("There is an error:" + " " + err.message + "<br>");
  } finally {
    document.writeln(
      "finaly block executed anyway either error handle or not "
    );
  }
}
