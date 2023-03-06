var arr = [20, 2, 22, 52, 2, 11, 5, 2, 4];
let i = 0;
let j = arr.length - 1;
for (let k = 0; k < arr.length; k++) {
  if (arr[i] == 2) {
    if (arr[j] == 2) {
      j--;
    } else {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  } else {
    i++;
  }
}
console.log(arr);
for (let a = 0; a < arr.length; a++) {
  for (let b = a + 1; b < arr.length; b++) {
    if (arr[a] > arr[b]) {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
  }
}
console.log(arr);
