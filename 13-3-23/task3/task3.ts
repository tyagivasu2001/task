/***************************************************** */
var arr= ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];

var numberArray=[0];

for (let i = 0; i < arr.length; i++) {

  try {

    // used try catch because we can't parse a charecter to number
    if (Number.isInteger(parseInt(arr[i])))
     {
      //change the value of string type to number
      numberArray[i] = parseInt(arr[i]);
    }
     else 
     {
      console.log(arr[i].toUpperCase());
    }
  }
   catch (e) 
   {
    console.log(e);
  }
}
// print the modified array
console.log(numberArray);
