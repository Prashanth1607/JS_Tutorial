//const tinderUser = new Object()
/**const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Prashanth",
            LastName: "Gowda"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

//const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    }

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

*/
const course = {
    coursName: "JS",
    price: "999",
    courseInstructor: "hitesh"
}

//couse.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

const navbar = ({company}) => {

}

navbar(company = "hitesh")

/*{
    "name": "Prashanth",
    "courseName": "JS",
    "price": "free"
}*/

[
    {},
    {},
    {}
]