

let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value1");
    },1000);
});
let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value2");
    },2000);
});
let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value3");
    },3000);
});
let p4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value4");
    },4000);
});
// to print the value 
p1.then((value)=>{
    console.log(value);
})
p2.then((value)=>{
    console.log(value);
})

p3.then((value)=>{
    console.log(value);
})

p4.then((value)=>{
    console.log(value);
})


function myDisplayer(some) {
    document.getElementById("display").innerHTML=some['fact'];
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://catfact.ninja/fact");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(JSON.parse(req.response));
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );