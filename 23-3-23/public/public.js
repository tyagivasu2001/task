
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
document.getElementById('createuser').addEventListener("click",checkUser);

async function checkUser(){
    const username = document.getElementById.value;
    const password = document.getElementById.value.bcrypt;
    const existUser =  await fetch(`localhost:5002/check${username}&${password}`)
    .then(res => {return res.status});
    if(existUser == 200){
        document.getElementById('dis').innerHTML = "Sign In Successful";
    }
    else{
        await fetch('localhost:5002/create',{
            body:{
                "username":username,
                "password":password.bcrypt,
                "token":jwt.sign({ 'username': username,"password":password }, 'Uk234517', function(err, token) {
                    return token
                  })
            }
        });
        document.getElementById('dis').innerHTML = "New User Created";
    }
}
