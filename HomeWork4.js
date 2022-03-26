         // ----- The Task 1 -----

function getResult(a, b, step){
    let count = []
    while(a <= b){
        count.push(a)
        a = a + step
    }

    return count
}

getResult(a, b, step)


         // ----- The Task 2 -----

function searchSymbol(text, element){
    let count = 0
    for(let i = 0;i < text.length;i++){
        if(element.includes(text[i])){
            count = count + 1
        }
    }
    return count
}

searchSymbol(text, element)


         // ----- The Task 3 -----

function reverseString(str){
    let newstr = ""
    for(let i = str.length - 1;i >= 0;i--){
        newstr = newstr + str[i]
    }
    if(str === ""){
        return "No"
    }else if(str === newstr){
        return "Yes"
    } else {
        return "No"
    }
}

reverseString(str)


         // ----- The Task 4 -----

function getMaximumArray(array){
    return Math.max(...array)
}

getMaximumArray(array)


         // ----- The Task 5 -----

function getMultiply(array){
    let count = []
    for(let i = 0;i < array.length - 1;i++){
        count.push((array[i]) * (array[i + 1]))
    }
    return count
}

getMultiply(array)


         // ----- The Task 6 -----

function getChangedString(text, old, modern){
    for(let i = 0;i < text.length;i++){
        if(old.includes(text[i])){
            text = text.replace(old, modern)
        }      
    }
    return text
}

getChangedString(text, old, modern)


         // ----- The Task 7 -----

function getRightArrow(x){
    let past1 = ""
    let i = 1
    
    while(i < x.length){
            past1 = past1 + i
            console.log(+past1)
            i++
    }
    
    while(x !== 0){
        console.log(+x)
        x = (x - (x % 10)) / 10
    }
}

getRightArrow("124567")