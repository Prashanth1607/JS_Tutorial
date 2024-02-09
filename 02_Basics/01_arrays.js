// array

const myArray = [0, 1, 2, 5, 4, 5, 3]
const myHeroes = ["Shaktiman", "Darshan"]

const myArr = new Array(0, 1, 3, 4 )

//console.log(myArray);
//console.log(myArray[1]);

// Array methods

//myArray.push(6);
//myArray.push(7);
//myArray.pop();

//myArray.unshift(9)
//myArray.shift()

console.log(myArray.includes(9));

console.log(myArray.indexOf(3));
console.log(myArray);

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2) ;
