const user = {
    username: "Prash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    } 

    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Prash"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "Prash"
//     console.log(this.username);
   
// }

// chai()


const chai = () => {
    let username = "Prash"
    console.log(this);
   
}



// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Prash"})

console.log(addTwo(3,4));
