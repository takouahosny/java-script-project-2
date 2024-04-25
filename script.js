//String Manipulation Functions:
//problem 1
// function reverseString(str) {
//let tab = [];
// let strTab = str.split("");
//for (let i = strTab.length - 1;i >= 0; i--) {
//  tab.push(strTab[i]);
// }
// return tab.join("")

//  sol 2
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("bonjour"));
//problem 2
function count(str) {
  return str.length;
}
//problem 3
function capitalizeWords(str) {
  let result = [];
  let tab = str.split();
  for (const elt of tab) {
    result.push(elt[0].toUpperCase() + elt.substring(1));
  }
  let finalStr = result.join(" ");
  return finalStr;
}
//console.log(capitalizeWords("Hello My Friend"));
//Array Functions:
//Problem 1
function findMaxAndMIN(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const elt of arr) {
    if (elt < min) {
      min = elt;
    }
  }
  return {
    min,
    max,
  };
}
//console.log(findMaxAndMIN([123,23,7,67676]));

//problem 2
function sumOfArray(arr) {
  let sum = 0;
  for (const elt of arr) {
    sum += elt;
  }
  return { sum };
}

//problem 3
function filterCars(arr, carType) {
  let result = [];
  for (const elt of arr) {
    if (elt.includes(carType)) {
      result.push(elt);
    }
  }
  return result;
}
let filteredCars = filterCars(
  [
    "BMW X1 SUV",
    "BMW X2 COUPE SUV",
    "BMW 3 SERIES SEDAN",
    "MERCEDES G-CLASS SUV",
    "MERCEDES C-CLASS",
    "MERCEDES SL ROADESTER",
    "FORD MUSTANG",
    "FORD RANGER XLT",
  ],
  "ford"
);
console.log(filtredeCars);
//Mathematical Functions:
//problem 1
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
}
//problem 2
function isPrime(n) {
  let result = "$ {n} is Prime";
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = "${n} is not Prime";
      break;
    }
  }
  return result;
}

//console.log(isPrime(11))

//problem 3
//Fibonacci sequence
function fibonaccisequence(n) {
  if (n <= 2) {
    return "The number of sequences must be above 2";
  }
  let tab = [0, 1];
  for (let i = 2; i < n; i++) {
    tab[i] = tab[i - 2] = tab[i - 1];
  }
  return tab;
}
console.log(fibonaccisequence(6));
