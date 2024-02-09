// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
     
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// console.log(b);
// console.log(c);

function one() {
    const userNAme = "Prashanth"

    function two() {
        const website = "youtube"
        console.log(userNAme);
    }
    // console.log(website);

    two()
}
// one()

if(true) {
    const username = "Ram"
    if(username === "Ram") {
        const website = "youtube"
        console.log(username + " " + website);
    }

//     console.log(website);
}

// console.log(username);

// ********************** interesting ******************//

function addOne(num) {
    return num + 1
}

console.log(addOne(5));

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));