const marvel_heroes = ["thor", "Iron", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heroes.push(dc_heros)

console.log(marvel_heroes);

console.log(marvel_heroes[3][1]);

const all = marvel_heroes.concat(dc_heros)
console.log(all);

const all_new = [...marvel_heroes, ...dc_heros]
console.log(all_new);

const another_array = [1,  2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_an = another_array.flat(Infinity);
console.log(real_an);



console.log(Array.isArray("Hitesh"))

console.log(Array.from({name: "hitesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));