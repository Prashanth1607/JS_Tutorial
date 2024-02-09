// singleton
//object.create
//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chowdhary",
    [mySym]: "myKey1",
    age: 18,
    Location: "Blr",
    email: "abc@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser["email"])
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "xyz@gmail.com"
//Object.freeze(JsUser)

JsUser.email = "vfd@gmail.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS User, ');
}

console.log(JsUser.gretting);

