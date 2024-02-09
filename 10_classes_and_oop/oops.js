const user = {
    username: "prash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    } 
    
    return this

}

const userOne = new User("Raju", 12, true)
const userTwo = new User("Ravi", 11, false)

console.log(userOne.constructor);
console.log(userTwo.constructor);
