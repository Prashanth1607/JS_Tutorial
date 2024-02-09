function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.poer);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

/* Her's what happens behind the scenes when the nwe keyword is used;

A new object is created:

A prototype is linked:

The constructor is called:

The new object is returned:
*/