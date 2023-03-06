function simpleIntrestCalculate() {
  let principalAmount = document.getElementById("principalAmount").value;
  let interestRate = document.getElementById("interestRate").value;
  let duration = document.getElementById("time").value;
  if (principalAmount == 0 || interestRate == 0 || duration == 0) {
    document.writeln("No field can be Zero ");
  } else {
    try {
      let ans = (principalAmount * interestRate * duration) / 100;
      document.writeln(ans);
    } catch (e) {
      document.writeln(e.message);
    }
  }
}
function compaundInterestCalculate() {
  let principalAmount = document.getElementById("principalAmount").value;
  let interestRate = document.getElementById("interestRate").value;
  let duration = document.getElementById("time").value;
  let n = window.prompt(
    "Enter the value That describe charge is anually or half yearly:"
  );
  if (principalAmount == 0 || interestRate == 0 || duration == 0 || n == 0) {
    document.writeln("No field can be Zero ");
  } else {
    try {
      let ans =
        principalAmount * Math.pow((1 + interestRate) / 100, duration * n) -
        principalAmount;
      document.writeln(ans);
    } catch (e) {
      document.writeln(e.message);
    }
  }
}
