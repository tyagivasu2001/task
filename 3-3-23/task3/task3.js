function arraymethods() {
  //    converting Arrays to string method

  var fruit = ["Banana", "Orange", "Apple"];
  var str = fruit.toString();
  document.writeln(str + "<br>");
  // join function method joins all array Element  into a String
  var fruits = ["Banana", "Orange", "Apple"];
  document.writeln(fruits.join("*") + "<br>");

  // poping method in java Script that removes the last elemnt from an array
  let item = ["milk", "fruit", "egg", "bread"];
  document.writeln("Before poping elements are:->" + item + "<br>");
  item.pop();
  document.writeln(item + "<br>");

  //   pushing method is used to add a element at the last of the array
  document.writeln("Element before pusing:->" + item + "<br>");
  item.push("Suger");
  document.writeln("Elements are pushing operation " + item + "<br>");

  // Shift Method used to delete the first element of
  //  array and move other element a lower index
  let cars = ["thar", "nexon", "fortuner", "endever"];
  document.writeln("element before Shift:->" + cars + "<br>");
  cars.shift();
  document.writeln("Elements after shift Method:->" + cars + "<br>");

  // Unshift method is used to add a element at the begining of an array
  document.writeln("Element before unshift:->" + item + "<br>");
  item.unshift("tea");
  document.writeln("Elements after Unshift:->" + item + "<br>");

  //  delete is used to delte a element from the arrya and it will create a hole there
  let days = ["Mon", "Tue", "Wed", "thur", "fri", "sat", "Sun"];
  document.writeln("Elemtnts before delte method:->" + days + "<br>");
  delete days[5];
  document.writeln("Elements after delte :->" + days + "<br>");

  // concat method is used to merge two arrays
  let boys = ["ravi", "naman", "aman", "priyanshu"];
  let girls = ["ritika", "sneha", "shruti", "ashwriya"];
  document.writeln(
    "Elements of both arrays before concat:->" + boys + "<br>" + girls + "<br>"
  );
  let boysandgils = boys.concat(girls);
  document.writeln("Elements of merged array:->" + boysandgils + "<br>");

  // Splice is used to add a elemrnt in the array as Well delete
  let furititem = ["Orange", "mango", "banana"];
  document.writeln("Elements before splice:->" + furititem + "<br>");
  furititem.splice(2, 0, "Kiwi");
  document.writeln("Elements after splice:->" + furititem + "<br>");

  //Slice method is used to break or cut array from a particular positon
  document.writeln("Element before slice method :->" + fruit + "<br>");
  let slicedarray = fruit.slice(1);
  document.writeln("Sliced array elements are:->" + slicedarray + "<br>");

  //Sort method id used to sort an arrya in acending order by alphabate as ..
  //
  let marks = [45, 12, 02, 98, 110, 158, 001];
  document.writeln("Marks before Sorting:->" + marks + "<br>");
  marks.sort(function (a, b) {
    return a - b;
  });
  document.writeln("Marks after sorting:->" + marks + "<br>");

  // Math.max function is used to find the maximum element from the array
  var maxvalueofarray = Math.max.apply(null, marks);
  document.writeln(maxvalueofarray + "<br>");

  //Math.min function is used to find the minimum element from the array
  var minvalueofarray = Math.min.apply(null, marks);
  document.writeln(minvalueofarray + "<br>");

  // we can sort our object array as well by  sort method with a property
  const car = [
    { type: "volvo", year: "2016" },
    { type: "Bmw", year: "2015" },
    { type: "Tata", year: "2018" },
  ];
  car.sort(function (a, b) {
    return a.year - b.year;
  });
  // map is used in java Script to create the a copy array we can also aply some
  //methods
  const numbers = [4, 9, 16, 25, 36, 49, 64];
  document.writeln("Array elents are:->" + numbers + "<br>");
  const copynumber = numbers.map(Math.sqrt);
  document.writeln("Square root applied array is:->" + copynumber + "<br>");

  // filter method is used to add only those number or data
  // Those will passs filter pararmeter
  const number = [14, 22, 45, 78, 98, 3, 4];
  document.writeln("Elements are:->" + number + "<br>");
  document.writeln("We want those element who are greater than 18" + "<br>");
  const greater18 = number.filter(calculate);
  function calculate(value, index, array) {
    return value > 18;
  }
  document.writeln("Filtered Element Array are:->" + greater18 + "<br>");

  // Reduce is a function that reduce the array from left to right
  // doesn't chnage the original array
  const randomnumber = [45, 5, 9, 16, 25];
  document.writeln("Random elements are :->" + randomnumber + "<br>");
  document.writeln(
    "I want to find the sum of the above array by reduce it" + "<br>"
  );
  let sum = randomnumber.reduce(sumfunction);
  function sumfunction(total, value, index, array) {
    return total + value;
  }
  document.writeln(
    "The sum of the array by reduce method is :->" + sum + "<br>"
  );
}

// object array functions
function objectmethods() {
  let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2018-05-03"),
      capacity: 7,
    },
    {
      color: "red",
      type: "BmW",
      registration: new Date("2019-06-05"),
      capacity: 5,
    },
    {
      color: "yellow ",
      type: "odi",
      registration: new Date("2015-01-03"),
      capacity: 7,
    },
    {
      color: "green",
      type: "minivan",
      registration: new Date("2014-08-03"),
      capacity: 3,
    },
  ];
  console.log(cars + "<br>");
  //unshift function over the object arrya

  cars.unshift({
    color: "blue",
    type: "mahindra",
    registration: new Date("2022-05-13"),
    capacity: 7,
  });
  console.log("After the Unshift operation");
  console.log(cars);
  // Shift operation remove the first element i.e an object  from the array
  cars.shift();

  //push method add a object at the last of the array object
  let car1 = {
    color: "red",
    type: "cabrio",
    registration: new Date("2016-05-02"),
    capacity: 2,
  };
  cars.push(car1);
  //pop method removes the last object from the objetct array
  cars.pop();
  // splice method can add the object element at given position
  let car2 = {
    color: "red",
    type: "cabrio",
    registration: new Date("2018-07-02"),
    capacity: 2,
  };
  cars.splice(4, 0, car2);
  // concat of object arrya 
  let carmodels=[
    {
        "color": "red",
        "type": "cabrio",
        "registration": new Date('2022-05-02'),
        "capacity": 2
      },
      {
        "color": "yellow",
        "type": "bmw",
        "registration": new Date('2023-06-02'),
        "capacity": 2
      },
      
  ];
  let indiancars=[
    {
        "color": "red",
        "type": "thar",
        "registration": new Date('2022-05-02'),
        "capacity": 2
      },
      {
        "color": "red",
        "type": "cabrio",
        "registration": new Date('2019-05-02'),
        "capacity": 2
      },
  ];
  var allinone=carmodel.concat(indiancars);
  console.log(allinone);
}
