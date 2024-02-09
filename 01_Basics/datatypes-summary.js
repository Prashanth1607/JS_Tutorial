// Primitive

// 7 types : String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 322146698795769n
// Reference (Non primitive)

// types : Array, objects, Functions

const heroes = ["Shaktiman", "Nograj", "Doga"]
let myObj = {
    name: "Prash",
    age: 22,
}
 
const myFunction = function(){
    console.log("Hello Prash");
}

console.log(typeof outsideTemp);

console.log(typeof id)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non - Primitive)

let myYoutubename = "Vlogs_of_Karundu.com"

let anothername = myYoutubename
anothername = "chai_code"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "abc@email.com",
    upi: "user2ybl"
}

let userTwo = userOne
userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);