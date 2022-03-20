         // ----- The Task 1 -----

function getArraysCount(array){                                // way 1
    let count = 0

    for(let i = 0;array[i] < array[i] + 1;i++){
        count = count + 1
    }
    return count
}

getArraysCount([])


let array = [5, 15, 25]                                        // way 2
let count = 0

for(let i = 0;array[i] < array[i] + 1;i++){
    count = count + 1
}
console.log(count)


         // ----- The Task 2 -----

function getArraysSum(arr){
    let count = 0
    for(let i = 0;i < arr.length;i++) {
        count = count + arr[i]
    }
    return count
}
getArraysSum([]);


         // ----- The Task 3 -----

function getPow3Numbers(num1, num2){                           // way 1
    for(let i = 3*3;i < num2;i *= 3){
        if(i >= num1){
            console.log(i)
        }
    }
}
getPow3Numbers(num1, num2);


let num1 = +prompt("Write any number")                          // way 2
let num2 = +prompt("Write number which bigger than previous")

for(let i = 3*3;i < num2;i *= 3){
    if(i >= num1){
        console.log(i)
    }
}


         // ----- The Task 4 -----


let num = prompt("Write any number")
let count = ""

for(let i = 0;num[i] < num[i] + 1;i++){
    if(num[i]%2 === 0 && num[i + 1]%2 === 0){
        count = count + (num[i] + "-")
    }else {
        count = count + num[i]
    }
}
console.log(count)


         // ----- The Task 5 -----

-