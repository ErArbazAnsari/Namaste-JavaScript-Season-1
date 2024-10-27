const array = [4, 5, 2, 10, 8];

console.log(
    "double: ",
    array.map((e) => e * 2)
);

function triple(e) {
    return e * 3;
}
console.log("triple: ", array.map(triple));

console.log(
    "binary: ",
    array.map((e) => e.toString(2))
);
