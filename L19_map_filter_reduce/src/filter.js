const array = [4, 5, 2, 10, 8, 1, 20];

console.log("original array: ", array);

// filter all odd values
function odd(e) {
    return e % 2;
}
console.log("all odd values: ", array.filter(odd));

// filter all even values
console.log(
    "all even values: ",
    array.filter((e) => e % 2 == 0)
);

// filter all the values which are >= 5
console.log(
    "values which are greater then 5: ",
    array.filter((e) => e >= 5)
);
