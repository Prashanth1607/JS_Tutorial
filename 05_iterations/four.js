const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by applce"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmin = ['js', 'rb', 'py', 'java']

for (const key in programmin) {
    console.log(programmin[key]);
}

