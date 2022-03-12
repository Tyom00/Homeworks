        // ----- The Task 1 -----

let number = +prompt("Write any number"); 
let count = 0;

while (number !== 0) {
  count = count + number % 10
  number = (number - (number % 10)) / 10;
}

console.log(count);


         // ----- The Task 2 -----

let a = +prompt("First side of a triangle");
let b = +prompt("Second side of a triangle");
let c = +prompt("Third side of a triangle");

if (a + b > c && a + c > b && c + b > a){
  console.log("yes")
} else {
  console.log("no")
}

         // ----- The Task 3 -----

let number = +prompt("Write any number with 9");
let nineCount = 0;

while (number !== 0) {
  if (number % 10 == 9) {
    nineCount += 1;
  }
  number = (number - (number % 10)) / 10;
}

console.log(nineCount);


         // ----- The Task 4 -----

let number = prompt("Write any number")
let count = ""

while(number !== 0){
    count = count + String(number % 10)
    number = (number - (number%10))/10
}

console.log(count)


         // ----- The Task 5 -----

let num = +prompt("Write any number");

for (let i = 1; i <= num; i *= 2) {
  i == num ? true : false
}