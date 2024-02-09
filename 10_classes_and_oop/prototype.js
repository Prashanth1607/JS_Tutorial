let myName = "hitesh      "

console.log(myName.trueLength);


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

myHero.hitesh();

// inheritance

const user = {
    name: "prash",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignmern: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

//modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True lenght is ${this.trim().length}`);
}

"Prash".trueLength()