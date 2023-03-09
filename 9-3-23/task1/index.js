function validate() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let gender = document.getElementById("gender").value;
  let emailaddress = document.getElementById("email").value;
  let Mobileno = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  // to validate the value of password
  var regularEpassword_valuepression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (firstname == "") {
    alert("Please Enter Your First name");
  } else if (lastname == "") {
    alert("please Enter your last name");
  } else if (gender == "") {
    alert("Please select gender ");
  } else if (Mobileno < 1000000000 || Mobileno > 9999999999) {
    alert("please enter a valid mobile number");
  } else if (emailaddress.includes(".com") == false) {
    alert("Invalid email");
  } else if (password.length < 6 || password.length > 16) {
    alert("password should contain 6-16 letters");
  } else if (!regularEpassword_valuepression.test(password)) {
    alert("password should conatin letters and special charecter");
  } else {
    document.writeln(firstname + "<br>");
    document.writeln(lastname + "<br>");
    document.writeln(gender + "<br>");
    document.writeln(emailaddress + "<br>");
    document.writeln(Mobileno + "<br>");
    document.writeln(password + "<br>");
  }
}
// to show password
function myFunction() {
  var password_value = document.getElementById("password");
  if (password_value.type === "password") {
    password_value.type = "tepassword_valuet";
  } else {
    password_value.type = "password";
  }
}
