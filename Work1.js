        // ----- The task 1 -----

let a = +prompt("Write any number");
let b = +prompt("Write smaller number than prwious");
alert(a + b);

let a = +prompt("Write any number");
let b = +prompt("Write smaller number than prwious");
alert(a - b);

let a = +prompt("Write any number");
let b = +prompt("Write smaller number than prwious");
alert(a * b);

let a = +prompt("Write any number");
let b = +prompt("Write smaller number than prwious");
alert(a / b);

let a = +prompt("Write any number");
let b = +prompt("Write smaller number than prwious");
alert(a % b);


 
        // ----- The task 2 -----

let a = prompt("What is your name?");
let b = prompt("What is your age?");
alert(`My name is ${a}, I am ${b}`);



        // ----- The task 3 -----

let a = +prompt("Write number");
if (a % 2 == 0){
    alert("No");
} else {
    alert("Yes");
}



        // ----- The task 4 -----

let a = +prompt("Write number");
if (a >= 0){
    alert("No");
} else {
    alert("Yes");
}



        // ----- The task 5 -----

let a = +prompt("Number 1");
let b = +prompt("Number 2");
if(a % b == 0) {
    alert("1");
}else if(b % a == 0){
    alert("1");
}else{
    alert("0");
}


        // ----- The task 6 -----

let a = +prompt("Write number 1 to 12");
if(a == 1){
    alert("January");
} else if(a == 2){
    alert("February");
} else if(a == 3){
    alert("March");
} else if(a == 4){
    alert("April");
} else if(a == 5){
    alert("May");
} else if(a == 6){
    alert("June");
} else if(a == 7){
    alert("July");
} else if(a == 8){
    alert("August");
} else if(a == 9){
    alert("September");
} else if(a == 10){
    alert("October");
} else if(a == 11){
    alert("November");
} else if(a == 12){
    alert("December");
} else {
    alert("Not Found");
}


        // ----- The task 7 -----

let a = +prompt("Number 1");
let b = +prompt("Number 2");
let c = +prompt("Number 3");
if (a >= b && a >= c){
    alert(a);
} else if(b >= a && b >= c){
    alert(b);
} else if(c >= a && c >= b){
    alert(c);
}