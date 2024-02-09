const coding = ["js", "ruby", "java", "c++", "python"]

coding.forEach( function (item) {
    console.log(item);
} )



coding.forEach ( (item) => {
    console.log(item);
} )



function printMe(item) {
    console.log(item);
}

coding.forEach ( (item, index, arr)=> {
    console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },,

    {
        languageName: "Python",
        languageFileName: "py"
    },

    {
        languageName: "Java",
        languageFileName: "java"
    },

    {
        languageName: "Ruby",
        languageFileName: "ry"
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName) ;
} )