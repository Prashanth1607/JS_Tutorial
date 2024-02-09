console.log("P");
console.log("R");
console.log("A");
console.log("S");
console.log("H");


function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");

}

sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2){
//     let res = num1 + num2
//     return res
    return num1 + num2
 }

const res = addTwoNumbers(2,3)

// console.log("Result: ", res);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Prashanth"))
// console.log(loginUserMessage("Prash"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    userName: "Prashanth",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    userName: "Sam",
    price: 969
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 600]));


//Api Based Projects
//Portfolio Based Projects
//Full Stack Projects